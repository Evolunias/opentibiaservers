import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nilot-8-6-retro-server');
}

export default function Nilot86RetroServerKeywordPage() {
  return <StaticKeywordPage slug="nilot-8-6-retro-server" />;
}
