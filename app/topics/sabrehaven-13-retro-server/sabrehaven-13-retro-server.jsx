import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('sabrehaven-13-retro-server');
}

export default function Sabrehaven13RetroServerKeywordPage() {
  return <StaticKeywordPage slug="sabrehaven-13-retro-server" />;
}
