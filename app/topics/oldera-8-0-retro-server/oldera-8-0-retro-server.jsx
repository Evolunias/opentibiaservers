import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oldera-8-0-retro-server');
}

export default function Oldera80RetroServerKeywordPage() {
  return <StaticKeywordPage slug="oldera-8-0-retro-server" />;
}
