import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('unline-8-6-retro-server');
}

export default function Unline86RetroServerKeywordPage() {
  return <StaticKeywordPage slug="unline-8-6-retro-server" />;
}
