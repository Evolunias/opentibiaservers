import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-7-4-ots');
}

export default function Tibia74OtsKeywordPage() {
  return <StaticKeywordPage slug="tibia-7-4-ots" />;
}
