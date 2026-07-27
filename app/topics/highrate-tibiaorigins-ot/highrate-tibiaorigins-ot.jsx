import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-tibiaorigins-ot');
}

export default function HighrateTibiaoriginsOtKeywordPage() {
  return <StaticKeywordPage slug="highrate-tibiaorigins-ot" />;
}
