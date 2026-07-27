import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('medivia-8-6-retro-server');
}

export default function Medivia86RetroServerKeywordPage() {
  return <StaticKeywordPage slug="medivia-8-6-retro-server" />;
}
