import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('serenity-evo-server-europe');
}

export default function SerenityEvoServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="serenity-evo-server-europe" />;
}
