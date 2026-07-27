import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('serenity-8-1-pvp-server');
}

export default function Serenity81PvpServerKeywordPage() {
  return <StaticKeywordPage slug="serenity-8-1-pvp-server" />;
}
