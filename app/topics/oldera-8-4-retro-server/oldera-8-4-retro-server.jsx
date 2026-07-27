import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oldera-8-4-retro-server');
}

export default function Oldera84RetroServerKeywordPage() {
  return <StaticKeywordPage slug="oldera-8-4-retro-server" />;
}
