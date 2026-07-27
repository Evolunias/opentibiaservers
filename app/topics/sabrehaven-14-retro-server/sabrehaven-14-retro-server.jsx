import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('sabrehaven-14-retro-server');
}

export default function Sabrehaven14RetroServerKeywordPage() {
  return <StaticKeywordPage slug="sabrehaven-14-retro-server" />;
}
