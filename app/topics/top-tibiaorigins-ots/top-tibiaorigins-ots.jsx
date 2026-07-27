import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-tibiaorigins-ots');
}

export default function TopTibiaoriginsOtsKeywordPage() {
  return <StaticKeywordPage slug="top-tibiaorigins-ots" />;
}
