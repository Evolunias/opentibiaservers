import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-active-players-guide-south-america');
}

export default function WithActivePlayersGuideSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="with-active-players-guide-south-america" />;
}
