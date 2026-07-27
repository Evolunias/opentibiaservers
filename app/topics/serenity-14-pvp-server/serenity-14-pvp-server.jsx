import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('serenity-14-pvp-server');
}

export default function Serenity14PvpServerKeywordPage() {
  return <StaticKeywordPage slug="serenity-14-pvp-server" />;
}
