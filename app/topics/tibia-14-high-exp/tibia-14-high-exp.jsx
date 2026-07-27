import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-14-high-exp');
}

export default function Tibia14HighExpKeywordPage() {
  return <StaticKeywordPage slug="tibia-14-high-exp" />;
}
