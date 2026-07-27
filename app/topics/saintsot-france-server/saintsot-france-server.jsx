import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('saintsot-france-server');
}

export default function SaintsotFranceServerKeywordPage() {
  return <StaticKeywordPage slug="saintsot-france-server" />;
}
