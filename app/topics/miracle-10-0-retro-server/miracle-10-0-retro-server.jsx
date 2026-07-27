import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('miracle-10-0-retro-server');
}

export default function Miracle100RetroServerKeywordPage() {
  return <StaticKeywordPage slug="miracle-10-0-retro-server" />;
}
