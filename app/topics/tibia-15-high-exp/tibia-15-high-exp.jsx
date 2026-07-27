import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-15-high-exp');
}

export default function Tibia15HighExpKeywordPage() {
  return <StaticKeywordPage slug="tibia-15-high-exp" />;
}
