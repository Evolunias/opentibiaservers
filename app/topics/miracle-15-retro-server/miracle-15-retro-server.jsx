import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('miracle-15-retro-server');
}

export default function Miracle15RetroServerKeywordPage() {
  return <StaticKeywordPage slug="miracle-15-retro-server" />;
}
