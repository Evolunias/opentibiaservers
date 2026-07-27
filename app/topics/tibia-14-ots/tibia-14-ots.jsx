import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-14-ots');
}

export default function Tibia14OtsKeywordPage() {
  return <StaticKeywordPage slug="tibia-14-ots" />;
}
