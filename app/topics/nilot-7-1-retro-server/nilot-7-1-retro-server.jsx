import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nilot-7-1-retro-server');
}

export default function Nilot71RetroServerKeywordPage() {
  return <StaticKeywordPage slug="nilot-7-1-retro-server" />;
}
