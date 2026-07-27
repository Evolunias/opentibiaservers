import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-tibijka-ots');
}

export default function CustomTibijkaOtsKeywordPage() {
  return <StaticKeywordPage slug="custom-tibijka-ots" />;
}
