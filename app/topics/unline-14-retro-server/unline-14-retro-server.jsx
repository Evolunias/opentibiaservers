import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('unline-14-retro-server');
}

export default function Unline14RetroServerKeywordPage() {
  return <StaticKeywordPage slug="unline-14-retro-server" />;
}
