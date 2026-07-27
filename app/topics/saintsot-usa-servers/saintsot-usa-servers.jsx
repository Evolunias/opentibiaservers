import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('saintsot-usa-servers');
}

export default function SaintsotUsaServersKeywordPage() {
  return <StaticKeywordPage slug="saintsot-usa-servers" />;
}
