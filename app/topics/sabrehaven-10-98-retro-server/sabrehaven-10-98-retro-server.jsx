import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('sabrehaven-10-98-retro-server');
}

export default function Sabrehaven1098RetroServerKeywordPage() {
  return <StaticKeywordPage slug="sabrehaven-10-98-retro-server" />;
}
