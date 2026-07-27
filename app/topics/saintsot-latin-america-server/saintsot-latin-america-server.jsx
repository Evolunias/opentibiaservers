import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('saintsot-latin-america-server');
}

export default function SaintsotLatinAmericaServerKeywordPage() {
  return <StaticKeywordPage slug="saintsot-latin-america-server" />;
}
