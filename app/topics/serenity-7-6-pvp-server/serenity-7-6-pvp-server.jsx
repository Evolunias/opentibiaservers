import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('serenity-7-6-pvp-server');
}

export default function Serenity76PvpServerKeywordPage() {
  return <StaticKeywordPage slug="serenity-7-6-pvp-server" />;
}
