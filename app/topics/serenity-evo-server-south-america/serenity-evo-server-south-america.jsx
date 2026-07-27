import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('serenity-evo-server-south-america');
}

export default function SerenityEvoServerSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="serenity-evo-server-south-america" />;
}
