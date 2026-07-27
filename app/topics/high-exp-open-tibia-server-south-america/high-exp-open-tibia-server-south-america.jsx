import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('high-exp-open-tibia-server-south-america');
}

export default function HighExpOpenTibiaServerSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="high-exp-open-tibia-server-south-america" />;
}
