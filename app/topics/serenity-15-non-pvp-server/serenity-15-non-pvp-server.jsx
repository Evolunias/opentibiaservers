import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('serenity-15-non-pvp-server');
}

export default function Serenity15NonPvpServerKeywordPage() {
  return <StaticKeywordPage slug="serenity-15-non-pvp-server" />;
}
