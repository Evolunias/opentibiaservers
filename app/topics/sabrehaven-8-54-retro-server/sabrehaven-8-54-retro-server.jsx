import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('sabrehaven-8-54-retro-server');
}

export default function Sabrehaven854RetroServerKeywordPage() {
  return <StaticKeywordPage slug="sabrehaven-8-54-retro-server" />;
}
