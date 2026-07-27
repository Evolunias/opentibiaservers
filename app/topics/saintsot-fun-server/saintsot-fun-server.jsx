import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('saintsot-fun-server');
}

export default function SaintsotFunServerKeywordPage() {
  return <StaticKeywordPage slug="saintsot-fun-server" />;
}
