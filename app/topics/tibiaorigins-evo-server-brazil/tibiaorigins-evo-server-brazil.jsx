import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiaorigins-evo-server-brazil');
}

export default function TibiaoriginsEvoServerBrazilKeywordPage() {
  return <StaticKeywordPage slug="tibiaorigins-evo-server-brazil" />;
}
