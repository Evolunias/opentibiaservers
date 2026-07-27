import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('mist-of-death-evo-server-north-america');
}

export default function MistOfDeathEvoServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="mist-of-death-evo-server-north-america" />;
}
