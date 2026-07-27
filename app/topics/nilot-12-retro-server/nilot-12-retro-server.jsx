import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nilot-12-retro-server');
}

export default function Nilot12RetroServerKeywordPage() {
  return <StaticKeywordPage slug="nilot-12-retro-server" />;
}
