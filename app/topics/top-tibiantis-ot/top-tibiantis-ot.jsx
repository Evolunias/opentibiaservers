import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-tibiantis-ot');
}

export default function TopTibiantisOtKeywordPage() {
  return <StaticKeywordPage slug="top-tibiantis-ot" />;
}
