import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('saintsot-south-america-server');
}

export default function SaintsotSouthAmericaServerKeywordPage() {
  return <StaticKeywordPage slug="saintsot-south-america-server" />;
}
