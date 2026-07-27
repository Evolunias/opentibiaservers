import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-8-6-ots');
}

export default function Tibia86OtsKeywordPage() {
  return <StaticKeywordPage slug="tibia-8-6-ots" />;
}
