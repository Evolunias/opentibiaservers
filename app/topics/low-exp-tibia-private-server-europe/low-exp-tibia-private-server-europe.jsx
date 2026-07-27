import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('low-exp-tibia-private-server-europe');
}

export default function LowExpTibiaPrivateServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="low-exp-tibia-private-server-europe" />;
}
