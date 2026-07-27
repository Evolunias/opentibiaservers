import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('serenity-8-1-non-pvp-server');
}

export default function Serenity81NonPvpServerKeywordPage() {
  return <StaticKeywordPage slug="serenity-8-1-non-pvp-server" />;
}
