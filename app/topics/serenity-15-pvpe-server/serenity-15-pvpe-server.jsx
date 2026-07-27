import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('serenity-15-pvpe-server');
}

export default function Serenity15PvpeServerKeywordPage() {
  return <StaticKeywordPage slug="serenity-15-pvpe-server" />;
}
