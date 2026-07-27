import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-12-client-ot');
}

export default function Tibia12ClientOtKeywordPage() {
  return <StaticKeywordPage slug="tibia-12-client-ot" />;
}
