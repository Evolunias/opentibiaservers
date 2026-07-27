import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('high-exp-tibia-private-server-europe');
}

export default function HighExpTibiaPrivateServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="high-exp-tibia-private-server-europe" />;
}
