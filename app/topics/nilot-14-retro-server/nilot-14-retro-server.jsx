import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nilot-14-retro-server');
}

export default function Nilot14RetroServerKeywordPage() {
  return <StaticKeywordPage slug="nilot-14-retro-server" />;
}
