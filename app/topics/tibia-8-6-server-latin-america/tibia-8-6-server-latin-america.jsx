import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-8-6-server-latin-america');
}

export default function Tibia86ServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="tibia-8-6-server-latin-america" />;
}
