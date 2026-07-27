import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-7-6-client-ot');
}

export default function Tibia76ClientOtKeywordPage() {
  return <StaticKeywordPage slug="tibia-7-6-client-ot" />;
}
