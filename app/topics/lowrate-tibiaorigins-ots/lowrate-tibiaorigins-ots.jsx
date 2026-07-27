import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-tibiaorigins-ots');
}

export default function LowrateTibiaoriginsOtsKeywordPage() {
  return <StaticKeywordPage slug="lowrate-tibiaorigins-ots" />;
}
