import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-7-4-high-exp');
}

export default function Tibia74HighExpKeywordPage() {
  return <StaticKeywordPage slug="tibia-7-4-high-exp" />;
}
