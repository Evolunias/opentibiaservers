import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nilot-10-0-retro-server');
}

export default function Nilot100RetroServerKeywordPage() {
  return <StaticKeywordPage slug="nilot-10-0-retro-server" />;
}
