import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('medivia-7-4-retro-server');
}

export default function Medivia74RetroServerKeywordPage() {
  return <StaticKeywordPage slug="medivia-7-4-retro-server" />;
}
