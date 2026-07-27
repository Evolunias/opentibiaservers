import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('serenity-13-pvp-server');
}

export default function Serenity13PvpServerKeywordPage() {
  return <StaticKeywordPage slug="serenity-13-pvp-server" />;
}
