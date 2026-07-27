import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('serenity-non-pvp-server-south-america');
}

export default function SerenityNonPvpServerSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="serenity-non-pvp-server-south-america" />;
}
