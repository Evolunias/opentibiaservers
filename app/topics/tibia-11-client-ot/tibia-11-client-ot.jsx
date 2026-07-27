import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-11-client-ot');
}

export default function Tibia11ClientOtKeywordPage() {
  return <StaticKeywordPage slug="tibia-11-client-ot" />;
}
