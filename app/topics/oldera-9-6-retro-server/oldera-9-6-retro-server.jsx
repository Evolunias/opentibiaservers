import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oldera-9-6-retro-server');
}

export default function Oldera96RetroServerKeywordPage() {
  return <StaticKeywordPage slug="oldera-9-6-retro-server" />;
}
