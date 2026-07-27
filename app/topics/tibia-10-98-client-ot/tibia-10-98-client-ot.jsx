import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-10-98-client-ot');
}

export default function Tibia1098ClientOtKeywordPage() {
  return <StaticKeywordPage slug="tibia-10-98-client-ot" />;
}
