import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-tibia-private-server-north-america');
}

export default function FreshStartTibiaPrivateServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-tibia-private-server-north-america" />;
}
