import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('serenity-10-98-pvpe-server');
}

export default function Serenity1098PvpeServerKeywordPage() {
  return <StaticKeywordPage slug="serenity-10-98-pvpe-server" />;
}
