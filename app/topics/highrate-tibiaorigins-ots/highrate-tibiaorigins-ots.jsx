import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-tibiaorigins-ots');
}

export default function HighrateTibiaoriginsOtsKeywordPage() {
  return <StaticKeywordPage slug="highrate-tibiaorigins-ots" />;
}
