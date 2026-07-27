import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-8-6-client-ot');
}

export default function Tibia86ClientOtKeywordPage() {
  return <StaticKeywordPage slug="tibia-8-6-client-ot" />;
}
