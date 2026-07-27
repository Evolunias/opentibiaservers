import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-tibiaorigins-ots');
}

export default function PopularTibiaoriginsOtsKeywordPage() {
  return <StaticKeywordPage slug="popular-tibiaorigins-ots" />;
}
