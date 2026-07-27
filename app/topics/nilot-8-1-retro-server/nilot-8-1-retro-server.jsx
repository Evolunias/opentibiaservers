import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nilot-8-1-retro-server');
}

export default function Nilot81RetroServerKeywordPage() {
  return <StaticKeywordPage slug="nilot-8-1-retro-server" />;
}
