import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('sabrehaven-pvpe-server-france');
}

export default function SabrehavenPvpeServerFranceKeywordPage() {
  return <StaticKeywordPage slug="sabrehaven-pvpe-server-france" />;
}
