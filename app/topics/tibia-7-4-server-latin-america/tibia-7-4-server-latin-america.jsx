import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-7-4-server-latin-america');
}

export default function Tibia74ServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="tibia-7-4-server-latin-america" />;
}
