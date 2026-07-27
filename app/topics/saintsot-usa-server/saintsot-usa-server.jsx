import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('saintsot-usa-server');
}

export default function SaintsotUsaServerKeywordPage() {
  return <StaticKeywordPage slug="saintsot-usa-server" />;
}
