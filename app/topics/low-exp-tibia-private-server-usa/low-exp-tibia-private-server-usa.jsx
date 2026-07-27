import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('low-exp-tibia-private-server-usa');
}

export default function LowExpTibiaPrivateServerUsaKeywordPage() {
  return <StaticKeywordPage slug="low-exp-tibia-private-server-usa" />;
}
