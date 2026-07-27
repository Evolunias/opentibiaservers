import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('canob-pvpe-server-france');
}

export default function CanobPvpeServerFranceKeywordPage() {
  return <StaticKeywordPage slug="canob-pvpe-server-france" />;
}
