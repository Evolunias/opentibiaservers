import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('serenity-8-6-pvp-server');
}

export default function Serenity86PvpServerKeywordPage() {
  return <StaticKeywordPage slug="serenity-8-6-pvp-server" />;
}
