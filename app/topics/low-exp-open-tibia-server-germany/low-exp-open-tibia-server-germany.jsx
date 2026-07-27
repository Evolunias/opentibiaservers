import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('low-exp-open-tibia-server-germany');
}

export default function LowExpOpenTibiaServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="low-exp-open-tibia-server-germany" />;
}
