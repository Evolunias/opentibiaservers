import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('sabrehaven-8-0-retro-server');
}

export default function Sabrehaven80RetroServerKeywordPage() {
  return <StaticKeywordPage slug="sabrehaven-8-0-retro-server" />;
}
