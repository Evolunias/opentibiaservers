import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('sabrehaven-8-6-retro-server');
}

export default function Sabrehaven86RetroServerKeywordPage() {
  return <StaticKeywordPage slug="sabrehaven-8-6-retro-server" />;
}
