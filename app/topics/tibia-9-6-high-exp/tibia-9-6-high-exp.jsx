import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-9-6-high-exp');
}

export default function Tibia96HighExpKeywordPage() {
  return <StaticKeywordPage slug="tibia-9-6-high-exp" />;
}
