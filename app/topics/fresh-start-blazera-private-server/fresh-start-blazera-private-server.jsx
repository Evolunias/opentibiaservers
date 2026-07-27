import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-blazera-private-server');
}

export default function FreshStartBlazeraPrivateServerKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-blazera-private-server" />;
}
