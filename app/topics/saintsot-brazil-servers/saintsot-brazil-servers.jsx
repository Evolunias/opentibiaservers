import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('saintsot-brazil-servers');
}

export default function SaintsotBrazilServersKeywordPage() {
  return <StaticKeywordPage slug="saintsot-brazil-servers" />;
}
