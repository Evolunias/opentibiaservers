import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oldera-brazil-server');
}

export default function OlderaBrazilServerKeywordPage() {
  return <StaticKeywordPage slug="oldera-brazil-server" />;
}
