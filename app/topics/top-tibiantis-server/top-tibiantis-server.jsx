import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-tibiantis-server');
}

export default function TopTibiantisServerKeywordPage() {
  return <StaticKeywordPage slug="top-tibiantis-server" />;
}
