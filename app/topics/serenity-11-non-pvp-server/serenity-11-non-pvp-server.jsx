import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('serenity-11-non-pvp-server');
}

export default function Serenity11NonPvpServerKeywordPage() {
  return <StaticKeywordPage slug="serenity-11-non-pvp-server" />;
}
