import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oldera-7-6-retro-server');
}

export default function Oldera76RetroServerKeywordPage() {
  return <StaticKeywordPage slug="oldera-7-6-retro-server" />;
}
