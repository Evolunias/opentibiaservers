import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oldera-7-1-retro-server');
}

export default function Oldera71RetroServerKeywordPage() {
  return <StaticKeywordPage slug="oldera-7-1-retro-server" />;
}
