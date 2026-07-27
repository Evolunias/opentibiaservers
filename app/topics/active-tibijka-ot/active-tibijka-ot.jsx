import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-tibijka-ot');
}

export default function ActiveTibijkaOtKeywordPage() {
  return <StaticKeywordPage slug="active-tibijka-ot" />;
}
