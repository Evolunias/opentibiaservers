import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-11-high-exp');
}

export default function Tibia11HighExpKeywordPage() {
  return <StaticKeywordPage slug="tibia-11-high-exp" />;
}
