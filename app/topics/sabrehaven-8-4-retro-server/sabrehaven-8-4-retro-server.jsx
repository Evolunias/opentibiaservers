import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('sabrehaven-8-4-retro-server');
}

export default function Sabrehaven84RetroServerKeywordPage() {
  return <StaticKeywordPage slug="sabrehaven-8-4-retro-server" />;
}
