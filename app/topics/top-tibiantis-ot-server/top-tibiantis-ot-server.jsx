import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-tibiantis-ot-server');
}

export default function TopTibiantisOtServerKeywordPage() {
  return <StaticKeywordPage slug="top-tibiantis-ot-server" />;
}
