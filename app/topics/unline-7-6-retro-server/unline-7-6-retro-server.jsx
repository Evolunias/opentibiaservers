import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('unline-7-6-retro-server');
}

export default function Unline76RetroServerKeywordPage() {
  return <StaticKeywordPage slug="unline-7-6-retro-server" />;
}
