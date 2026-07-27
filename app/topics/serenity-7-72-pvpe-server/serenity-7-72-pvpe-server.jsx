import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('serenity-7-72-pvpe-server');
}

export default function Serenity772PvpeServerKeywordPage() {
  return <StaticKeywordPage slug="serenity-7-72-pvpe-server" />;
}
