import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-oldera-register');
}

export default function CurrentOlderaRegisterKeywordPage() {
  return <StaticKeywordPage slug="current-oldera-register" />;
}
