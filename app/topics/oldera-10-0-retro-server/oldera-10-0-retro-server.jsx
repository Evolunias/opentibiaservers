import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oldera-10-0-retro-server');
}

export default function Oldera100RetroServerKeywordPage() {
  return <StaticKeywordPage slug="oldera-10-0-retro-server" />;
}
