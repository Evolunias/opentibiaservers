import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('miracle-14-retro-server');
}

export default function Miracle14RetroServerKeywordPage() {
  return <StaticKeywordPage slug="miracle-14-retro-server" />;
}
