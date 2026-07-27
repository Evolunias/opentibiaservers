import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-tibiaorigins-ots');
}

export default function FreshStartTibiaoriginsOtsKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-tibiaorigins-ots" />;
}
