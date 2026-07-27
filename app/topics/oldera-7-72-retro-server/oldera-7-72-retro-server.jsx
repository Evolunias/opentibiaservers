import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oldera-7-72-retro-server');
}

export default function Oldera772RetroServerKeywordPage() {
  return <StaticKeywordPage slug="oldera-7-72-retro-server" />;
}
