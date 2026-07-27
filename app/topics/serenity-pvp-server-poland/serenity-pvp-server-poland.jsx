import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('serenity-pvp-server-poland');
}

export default function SerenityPvpServerPolandKeywordPage() {
  return <StaticKeywordPage slug="serenity-pvp-server-poland" />;
}
