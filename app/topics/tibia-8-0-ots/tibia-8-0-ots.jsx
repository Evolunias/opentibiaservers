import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-8-0-ots');
}

export default function Tibia80OtsKeywordPage() {
  return <StaticKeywordPage slug="tibia-8-0-ots" />;
}
