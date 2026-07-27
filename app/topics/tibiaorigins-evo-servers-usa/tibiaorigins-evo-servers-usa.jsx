import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiaorigins-evo-servers-usa');
}

export default function TibiaoriginsEvoServersUsaKeywordPage() {
  return <StaticKeywordPage slug="tibiaorigins-evo-servers-usa" />;
}
