import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('saintsot-latin-america-servers');
}

export default function SaintsotLatinAmericaServersKeywordPage() {
  return <StaticKeywordPage slug="saintsot-latin-america-servers" />;
}
