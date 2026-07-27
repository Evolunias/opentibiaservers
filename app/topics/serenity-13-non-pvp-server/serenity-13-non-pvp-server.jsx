import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('serenity-13-non-pvp-server');
}

export default function Serenity13NonPvpServerKeywordPage() {
  return <StaticKeywordPage slug="serenity-13-non-pvp-server" />;
}
