import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-eldera-register');
}

export default function CurrentElderaRegisterKeywordPage() {
  return <StaticKeywordPage slug="current-eldera-register" />;
}
