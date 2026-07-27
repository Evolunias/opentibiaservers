import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('sabrehaven-15-retro-server');
}

export default function Sabrehaven15RetroServerKeywordPage() {
  return <StaticKeywordPage slug="sabrehaven-15-retro-server" />;
}
