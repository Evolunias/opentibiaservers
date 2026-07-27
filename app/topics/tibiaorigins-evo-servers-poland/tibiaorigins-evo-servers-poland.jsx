import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiaorigins-evo-servers-poland');
}

export default function TibiaoriginsEvoServersPolandKeywordPage() {
  return <StaticKeywordPage slug="tibiaorigins-evo-servers-poland" />;
}
