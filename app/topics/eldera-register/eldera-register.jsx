import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('eldera-register');
}

export default function ElderaRegisterKeywordPage() {
  return <StaticKeywordPage slug="eldera-register" />;
}
