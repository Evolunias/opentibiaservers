import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('serenity-8-54-pvp-server');
}

export default function Serenity854PvpServerKeywordPage() {
  return <StaticKeywordPage slug="serenity-8-54-pvp-server" />;
}
