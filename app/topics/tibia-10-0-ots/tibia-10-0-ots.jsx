import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-10-0-ots');
}

export default function Tibia100OtsKeywordPage() {
  return <StaticKeywordPage slug="tibia-10-0-ots" />;
}
