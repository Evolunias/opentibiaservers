import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-10-0-client-ot');
}

export default function Tibia100ClientOtKeywordPage() {
  return <StaticKeywordPage slug="tibia-10-0-client-ot" />;
}
