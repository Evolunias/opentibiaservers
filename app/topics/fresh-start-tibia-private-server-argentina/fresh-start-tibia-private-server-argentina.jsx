import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-tibia-private-server-argentina');
}

export default function FreshStartTibiaPrivateServerArgentinaKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-tibia-private-server-argentina" />;
}
