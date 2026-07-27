import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('serenity-8-6-non-pvp-server');
}

export default function Serenity86NonPvpServerKeywordPage() {
  return <StaticKeywordPage slug="serenity-8-6-non-pvp-server" />;
}
