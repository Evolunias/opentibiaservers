import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('saintsot-france-servers');
}

export default function SaintsotFranceServersKeywordPage() {
  return <StaticKeywordPage slug="saintsot-france-servers" />;
}
