import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-7-4-server-north-america');
}

export default function Tibia74ServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="tibia-7-4-server-north-america" />;
}
