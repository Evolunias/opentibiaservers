import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nilot-13-retro-server');
}

export default function Nilot13RetroServerKeywordPage() {
  return <StaticKeywordPage slug="nilot-13-retro-server" />;
}
