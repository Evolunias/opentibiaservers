import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-tibianus-private-server');
}

export default function FreshStartTibianusPrivateServerKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-tibianus-private-server" />;
}
