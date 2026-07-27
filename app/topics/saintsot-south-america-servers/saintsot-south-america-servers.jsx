import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('saintsot-south-america-servers');
}

export default function SaintsotSouthAmericaServersKeywordPage() {
  return <StaticKeywordPage slug="saintsot-south-america-servers" />;
}
