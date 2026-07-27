import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiaorigins-evo-servers-brazil');
}

export default function TibiaoriginsEvoServersBrazilKeywordPage() {
  return <StaticKeywordPage slug="tibiaorigins-evo-servers-brazil" />;
}
