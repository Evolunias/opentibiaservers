import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('sabrehaven-12-retro-server');
}

export default function Sabrehaven12RetroServerKeywordPage() {
  return <StaticKeywordPage slug="sabrehaven-12-retro-server" />;
}
