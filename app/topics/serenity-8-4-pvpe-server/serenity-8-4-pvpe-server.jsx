import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('serenity-8-4-pvpe-server');
}

export default function Serenity84PvpeServerKeywordPage() {
  return <StaticKeywordPage slug="serenity-8-4-pvpe-server" />;
}
