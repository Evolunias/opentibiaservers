import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('serenity-10-0-non-pvp-server');
}

export default function Serenity100NonPvpServerKeywordPage() {
  return <StaticKeywordPage slug="serenity-10-0-non-pvp-server" />;
}
