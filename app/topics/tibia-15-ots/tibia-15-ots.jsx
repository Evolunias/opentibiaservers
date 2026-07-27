import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-15-ots');
}

export default function Tibia15OtsKeywordPage() {
  return <StaticKeywordPage slug="tibia-15-ots" />;
}
