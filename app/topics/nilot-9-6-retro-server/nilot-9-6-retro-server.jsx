import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nilot-9-6-retro-server');
}

export default function Nilot96RetroServerKeywordPage() {
  return <StaticKeywordPage slug="nilot-9-6-retro-server" />;
}
