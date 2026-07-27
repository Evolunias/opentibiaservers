import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-15-client-ot');
}

export default function Tibia15ClientOtKeywordPage() {
  return <StaticKeywordPage slug="tibia-15-client-ot" />;
}
