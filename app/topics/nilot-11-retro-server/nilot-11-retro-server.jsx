import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nilot-11-retro-server');
}

export default function Nilot11RetroServerKeywordPage() {
  return <StaticKeywordPage slug="nilot-11-retro-server" />;
}
