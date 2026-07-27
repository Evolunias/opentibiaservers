import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-8-54-client-ot');
}

export default function Tibia854ClientOtKeywordPage() {
  return <StaticKeywordPage slug="tibia-8-54-client-ot" />;
}
