import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oldera-14-retro-server');
}

export default function Oldera14RetroServerKeywordPage() {
  return <StaticKeywordPage slug="oldera-14-retro-server" />;
}
