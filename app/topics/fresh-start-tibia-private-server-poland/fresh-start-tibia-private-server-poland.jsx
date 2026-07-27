import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-tibia-private-server-poland');
}

export default function FreshStartTibiaPrivateServerPolandKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-tibia-private-server-poland" />;
}
