import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('sabrehaven-8-1-retro-server');
}

export default function Sabrehaven81RetroServerKeywordPage() {
  return <StaticKeywordPage slug="sabrehaven-8-1-retro-server" />;
}
