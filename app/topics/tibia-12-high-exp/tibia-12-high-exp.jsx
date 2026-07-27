import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-12-high-exp');
}

export default function Tibia12HighExpKeywordPage() {
  return <StaticKeywordPage slug="tibia-12-high-exp" />;
}
