import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oxygenot-france-server');
}

export default function OxygenotFranceServerKeywordPage() {
  return <StaticKeywordPage slug="oxygenot-france-server" />;
}
