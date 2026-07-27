import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-tibia-private-server-usa');
}

export default function FreshStartTibiaPrivateServerUsaKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-tibia-private-server-usa" />;
}
