import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('serenity-9-6-pvpe-server');
}

export default function Serenity96PvpeServerKeywordPage() {
  return <StaticKeywordPage slug="serenity-9-6-pvpe-server" />;
}
