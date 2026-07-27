import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('sabrehaven-11-retro-server');
}

export default function Sabrehaven11RetroServerKeywordPage() {
  return <StaticKeywordPage slug="sabrehaven-11-retro-server" />;
}
