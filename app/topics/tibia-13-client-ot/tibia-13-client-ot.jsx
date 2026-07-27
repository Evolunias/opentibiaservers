import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-13-client-ot');
}

export default function Tibia13ClientOtKeywordPage() {
  return <StaticKeywordPage slug="tibia-13-client-ot" />;
}
