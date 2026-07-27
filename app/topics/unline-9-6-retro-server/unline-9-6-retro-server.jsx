import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('unline-9-6-retro-server');
}

export default function Unline96RetroServerKeywordPage() {
  return <StaticKeywordPage slug="unline-9-6-retro-server" />;
}
