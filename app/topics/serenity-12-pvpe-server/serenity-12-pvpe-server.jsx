import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('serenity-12-pvpe-server');
}

export default function Serenity12PvpeServerKeywordPage() {
  return <StaticKeywordPage slug="serenity-12-pvpe-server" />;
}
