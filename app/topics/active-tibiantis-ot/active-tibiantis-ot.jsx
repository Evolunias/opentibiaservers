import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-tibiantis-ot');
}

export default function ActiveTibiantisOtKeywordPage() {
  return <StaticKeywordPage slug="active-tibiantis-ot" />;
}
