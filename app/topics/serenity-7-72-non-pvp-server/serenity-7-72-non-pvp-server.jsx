import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('serenity-7-72-non-pvp-server');
}

export default function Serenity772NonPvpServerKeywordPage() {
  return <StaticKeywordPage slug="serenity-7-72-non-pvp-server" />;
}
