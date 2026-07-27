import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-tibia-private-server-germany');
}

export default function FreshStartTibiaPrivateServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-tibia-private-server-germany" />;
}
