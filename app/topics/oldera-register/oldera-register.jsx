import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oldera-register');
}

export default function OlderaRegisterKeywordPage() {
  return <StaticKeywordPage slug="oldera-register" />;
}
