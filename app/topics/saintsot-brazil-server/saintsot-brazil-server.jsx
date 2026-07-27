import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('saintsot-brazil-server');
}

export default function SaintsotBrazilServerKeywordPage() {
  return <StaticKeywordPage slug="saintsot-brazil-server" />;
}
