import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('miracle-11-retro-server');
}

export default function Miracle11RetroServerKeywordPage() {
  return <StaticKeywordPage slug="miracle-11-retro-server" />;
}
