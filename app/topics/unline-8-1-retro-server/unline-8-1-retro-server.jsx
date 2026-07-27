import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('unline-8-1-retro-server');
}

export default function Unline81RetroServerKeywordPage() {
  return <StaticKeywordPage slug="unline-8-1-retro-server" />;
}
