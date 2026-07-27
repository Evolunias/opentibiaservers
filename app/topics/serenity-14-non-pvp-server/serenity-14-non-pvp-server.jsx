import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('serenity-14-non-pvp-server');
}

export default function Serenity14NonPvpServerKeywordPage() {
  return <StaticKeywordPage slug="serenity-14-non-pvp-server" />;
}
