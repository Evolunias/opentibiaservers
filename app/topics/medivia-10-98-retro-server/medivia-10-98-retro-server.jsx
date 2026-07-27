import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('medivia-10-98-retro-server');
}

export default function Medivia1098RetroServerKeywordPage() {
  return <StaticKeywordPage slug="medivia-10-98-retro-server" />;
}
