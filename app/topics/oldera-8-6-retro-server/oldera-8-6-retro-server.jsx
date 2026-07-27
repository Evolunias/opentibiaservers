import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oldera-8-6-retro-server');
}

export default function Oldera86RetroServerKeywordPage() {
  return <StaticKeywordPage slug="oldera-8-6-retro-server" />;
}
