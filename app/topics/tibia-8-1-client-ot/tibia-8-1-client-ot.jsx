import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-8-1-client-ot');
}

export default function Tibia81ClientOtKeywordPage() {
  return <StaticKeywordPage slug="tibia-8-1-client-ot" />;
}
