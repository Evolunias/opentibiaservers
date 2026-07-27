import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-8-6-high-exp');
}

export default function Tibia86HighExpKeywordPage() {
  return <StaticKeywordPage slug="tibia-8-6-high-exp" />;
}
