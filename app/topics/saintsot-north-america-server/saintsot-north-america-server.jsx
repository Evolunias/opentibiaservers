import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('saintsot-north-america-server');
}

export default function SaintsotNorthAmericaServerKeywordPage() {
  return <StaticKeywordPage slug="saintsot-north-america-server" />;
}
