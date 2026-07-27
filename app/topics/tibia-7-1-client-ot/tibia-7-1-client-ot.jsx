import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-7-1-client-ot');
}

export default function Tibia71ClientOtKeywordPage() {
  return <StaticKeywordPage slug="tibia-7-1-client-ot" />;
}
