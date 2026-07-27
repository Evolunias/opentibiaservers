import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-tibia-private-server-brazil');
}

export default function FreshStartTibiaPrivateServerBrazilKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-tibia-private-server-brazil" />;
}
