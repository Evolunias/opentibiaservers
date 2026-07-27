import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-8-4-client-ot');
}

export default function Tibia84ClientOtKeywordPage() {
  return <StaticKeywordPage slug="tibia-8-4-client-ot" />;
}
