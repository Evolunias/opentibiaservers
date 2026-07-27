import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-ot-server-latin-america');
}

export default function TibiaOtServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="tibia-ot-server-latin-america" />;
}
