import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('sabrehaven-7-4-retro-server');
}

export default function Sabrehaven74RetroServerKeywordPage() {
  return <StaticKeywordPage slug="sabrehaven-7-4-retro-server" />;
}
