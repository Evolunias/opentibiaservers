import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('serenity-non-pvp-server-poland');
}

export default function SerenityNonPvpServerPolandKeywordPage() {
  return <StaticKeywordPage slug="serenity-non-pvp-server-poland" />;
}
