import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oldera-15-retro-server');
}

export default function Oldera15RetroServerKeywordPage() {
  return <StaticKeywordPage slug="oldera-15-retro-server" />;
}
