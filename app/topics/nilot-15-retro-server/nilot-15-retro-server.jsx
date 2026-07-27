import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nilot-15-retro-server');
}

export default function Nilot15RetroServerKeywordPage() {
  return <StaticKeywordPage slug="nilot-15-retro-server" />;
}
