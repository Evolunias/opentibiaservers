import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nilot-8-0-retro-server');
}

export default function Nilot80RetroServerKeywordPage() {
  return <StaticKeywordPage slug="nilot-8-0-retro-server" />;
}
