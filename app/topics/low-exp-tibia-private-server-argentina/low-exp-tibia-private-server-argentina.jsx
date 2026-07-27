import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('low-exp-tibia-private-server-argentina');
}

export default function LowExpTibiaPrivateServerArgentinaKeywordPage() {
  return <StaticKeywordPage slug="low-exp-tibia-private-server-argentina" />;
}
