import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('serenity-15-pvp-server');
}

export default function Serenity15PvpServerKeywordPage() {
  return <StaticKeywordPage slug="serenity-15-pvp-server" />;
}
