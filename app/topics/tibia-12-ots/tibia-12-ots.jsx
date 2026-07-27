import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-12-ots');
}

export default function Tibia12OtsKeywordPage() {
  return <StaticKeywordPage slug="tibia-12-ots" />;
}
