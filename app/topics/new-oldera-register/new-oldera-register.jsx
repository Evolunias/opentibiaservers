import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-oldera-register');
}

export default function NewOlderaRegisterKeywordPage() {
  return <StaticKeywordPage slug="new-oldera-register" />;
}
