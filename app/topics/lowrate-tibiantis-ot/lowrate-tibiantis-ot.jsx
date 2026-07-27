import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-tibiantis-ot');
}

export default function LowrateTibiantisOtKeywordPage() {
  return <StaticKeywordPage slug="lowrate-tibiantis-ot" />;
}
