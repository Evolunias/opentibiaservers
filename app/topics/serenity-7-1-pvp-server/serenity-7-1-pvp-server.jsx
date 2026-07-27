import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('serenity-7-1-pvp-server');
}

export default function Serenity71PvpServerKeywordPage() {
  return <StaticKeywordPage slug="serenity-7-1-pvp-server" />;
}
