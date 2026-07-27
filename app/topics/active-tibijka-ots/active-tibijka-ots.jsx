import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-tibijka-ots');
}

export default function ActiveTibijkaOtsKeywordPage() {
  return <StaticKeywordPage slug="active-tibijka-ots" />;
}
