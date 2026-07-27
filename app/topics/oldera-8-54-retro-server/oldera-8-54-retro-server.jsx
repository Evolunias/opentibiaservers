import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oldera-8-54-retro-server');
}

export default function Oldera854RetroServerKeywordPage() {
  return <StaticKeywordPage slug="oldera-8-54-retro-server" />;
}
