import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('serenity-evo-servers-usa');
}

export default function SerenityEvoServersUsaKeywordPage() {
  return <StaticKeywordPage slug="serenity-evo-servers-usa" />;
}
