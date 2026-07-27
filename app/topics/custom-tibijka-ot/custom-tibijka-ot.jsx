import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-tibijka-ot');
}

export default function CustomTibijkaOtKeywordPage() {
  return <StaticKeywordPage slug="custom-tibijka-ot" />;
}
