import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oldera-13-retro-server');
}

export default function Oldera13RetroServerKeywordPage() {
  return <StaticKeywordPage slug="oldera-13-retro-server" />;
}
