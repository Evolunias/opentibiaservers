import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('miracle-12-retro-server');
}

export default function Miracle12RetroServerKeywordPage() {
  return <StaticKeywordPage slug="miracle-12-retro-server" />;
}
