import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiara-brazil-server');
}

export default function TibiaraBrazilServerKeywordPage() {
  return <StaticKeywordPage slug="tibiara-brazil-server" />;
}
