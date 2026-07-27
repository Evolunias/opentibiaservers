import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('saintsot-chile-server');
}

export default function SaintsotChileServerKeywordPage() {
  return <StaticKeywordPage slug="saintsot-chile-server" />;
}
