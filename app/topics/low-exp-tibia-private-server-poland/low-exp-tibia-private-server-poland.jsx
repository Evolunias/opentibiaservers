import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('low-exp-tibia-private-server-poland');
}

export default function LowExpTibiaPrivateServerPolandKeywordPage() {
  return <StaticKeywordPage slug="low-exp-tibia-private-server-poland" />;
}
