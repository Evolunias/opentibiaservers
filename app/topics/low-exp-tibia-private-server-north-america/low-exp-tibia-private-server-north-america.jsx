import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('low-exp-tibia-private-server-north-america');
}

export default function LowExpTibiaPrivateServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="low-exp-tibia-private-server-north-america" />;
}
