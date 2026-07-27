import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('serenity-non-pvp-server-germany');
}

export default function SerenityNonPvpServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="serenity-non-pvp-server-germany" />;
}
