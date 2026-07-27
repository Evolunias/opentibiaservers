import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('sabrehaven-7-72-retro-server');
}

export default function Sabrehaven772RetroServerKeywordPage() {
  return <StaticKeywordPage slug="sabrehaven-7-72-retro-server" />;
}
