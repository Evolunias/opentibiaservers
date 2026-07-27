import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-8-1-ots');
}

export default function Tibia81OtsKeywordPage() {
  return <StaticKeywordPage slug="tibia-8-1-ots" />;
}
