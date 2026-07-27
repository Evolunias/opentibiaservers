import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('saintsot-chile-servers');
}

export default function SaintsotChileServersKeywordPage() {
  return <StaticKeywordPage slug="saintsot-chile-servers" />;
}
