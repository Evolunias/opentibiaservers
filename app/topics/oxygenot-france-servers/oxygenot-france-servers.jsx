import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oxygenot-france-servers');
}

export default function OxygenotFranceServersKeywordPage() {
  return <StaticKeywordPage slug="oxygenot-france-servers" />;
}
