import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('sabrehaven-9-6-retro-server');
}

export default function Sabrehaven96RetroServerKeywordPage() {
  return <StaticKeywordPage slug="sabrehaven-9-6-retro-server" />;
}
