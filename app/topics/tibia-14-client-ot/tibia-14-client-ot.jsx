import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-14-client-ot');
}

export default function Tibia14ClientOtKeywordPage() {
  return <StaticKeywordPage slug="tibia-14-client-ot" />;
}
