import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('serenity-9-6-pvp-server');
}

export default function Serenity96PvpServerKeywordPage() {
  return <StaticKeywordPage slug="serenity-9-6-pvp-server" />;
}
