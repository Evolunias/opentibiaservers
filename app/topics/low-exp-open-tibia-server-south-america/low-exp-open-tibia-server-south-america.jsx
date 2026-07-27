import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('low-exp-open-tibia-server-south-america');
}

export default function LowExpOpenTibiaServerSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="low-exp-open-tibia-server-south-america" />;
}
