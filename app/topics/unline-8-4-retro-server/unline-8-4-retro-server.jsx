import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('unline-8-4-retro-server');
}

export default function Unline84RetroServerKeywordPage() {
  return <StaticKeywordPage slug="unline-8-4-retro-server" />;
}
