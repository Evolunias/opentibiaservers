import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-7-72-client-ot');
}

export default function Tibia772ClientOtKeywordPage() {
  return <StaticKeywordPage slug="tibia-7-72-client-ot" />;
}
