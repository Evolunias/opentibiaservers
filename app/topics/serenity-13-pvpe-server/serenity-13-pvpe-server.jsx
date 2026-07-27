import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('serenity-13-pvpe-server');
}

export default function Serenity13PvpeServerKeywordPage() {
  return <StaticKeywordPage slug="serenity-13-pvpe-server" />;
}
