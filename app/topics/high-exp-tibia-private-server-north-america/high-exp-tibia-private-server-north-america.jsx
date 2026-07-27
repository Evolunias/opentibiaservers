import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('high-exp-tibia-private-server-north-america');
}

export default function HighExpTibiaPrivateServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="high-exp-tibia-private-server-north-america" />;
}
