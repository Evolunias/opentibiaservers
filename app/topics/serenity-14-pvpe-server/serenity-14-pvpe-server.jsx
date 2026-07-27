import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('serenity-14-pvpe-server');
}

export default function Serenity14PvpeServerKeywordPage() {
  return <StaticKeywordPage slug="serenity-14-pvpe-server" />;
}
