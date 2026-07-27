import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-tibiantis-ot');
}

export default function CustomTibiantisOtKeywordPage() {
  return <StaticKeywordPage slug="custom-tibiantis-ot" />;
}
