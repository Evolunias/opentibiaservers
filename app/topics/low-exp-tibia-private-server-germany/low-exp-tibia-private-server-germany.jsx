import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('low-exp-tibia-private-server-germany');
}

export default function LowExpTibiaPrivateServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="low-exp-tibia-private-server-germany" />;
}
