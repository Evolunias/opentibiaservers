import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-tibiaorigins');
}

export default function HighrateTibiaoriginsKeywordPage() {
  return <StaticKeywordPage slug="highrate-tibiaorigins" />;
}
