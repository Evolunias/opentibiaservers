import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('serenity-pvp-server-germany');
}

export default function SerenityPvpServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="serenity-pvp-server-germany" />;
}
