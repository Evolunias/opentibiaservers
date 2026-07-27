import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-tibiaorigins-ots');
}

export default function CurrentTibiaoriginsOtsKeywordPage() {
  return <StaticKeywordPage slug="current-tibiaorigins-ots" />;
}
