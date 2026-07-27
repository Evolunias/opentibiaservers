import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('low-exp-tibia-private-server-uk');
}

export default function LowExpTibiaPrivateServerUkKeywordPage() {
  return <StaticKeywordPage slug="low-exp-tibia-private-server-uk" />;
}
