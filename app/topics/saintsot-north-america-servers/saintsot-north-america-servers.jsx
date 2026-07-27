import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('saintsot-north-america-servers');
}

export default function SaintsotNorthAmericaServersKeywordPage() {
  return <StaticKeywordPage slug="saintsot-north-america-servers" />;
}
