import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('serenity-pvp-server-south-america');
}

export default function SerenityPvpServerSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="serenity-pvp-server-south-america" />;
}
