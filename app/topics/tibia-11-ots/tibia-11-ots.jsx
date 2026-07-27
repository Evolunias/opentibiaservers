import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-11-ots');
}

export default function Tibia11OtsKeywordPage() {
  return <StaticKeywordPage slug="tibia-11-ots" />;
}
