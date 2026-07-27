import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nilot-7-6-retro-server');
}

export default function Nilot76RetroServerKeywordPage() {
  return <StaticKeywordPage slug="nilot-7-6-retro-server" />;
}
