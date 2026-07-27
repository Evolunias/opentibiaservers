import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nilot-7-4-retro-server');
}

export default function Nilot74RetroServerKeywordPage() {
  return <StaticKeywordPage slug="nilot-7-4-retro-server" />;
}
