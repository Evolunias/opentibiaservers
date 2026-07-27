import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-7-72-ots');
}

export default function Tibia772OtsKeywordPage() {
  return <StaticKeywordPage slug="tibia-7-72-ots" />;
}
