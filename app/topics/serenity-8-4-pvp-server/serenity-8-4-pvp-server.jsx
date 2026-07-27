import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('serenity-8-4-pvp-server');
}

export default function Serenity84PvpServerKeywordPage() {
  return <StaticKeywordPage slug="serenity-8-4-pvp-server" />;
}
