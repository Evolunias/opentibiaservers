import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-7-1-ots');
}

export default function Tibia71OtsKeywordPage() {
  return <StaticKeywordPage slug="tibia-7-1-ots" />;
}
