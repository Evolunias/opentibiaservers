import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nilot-12-evo-server');
}

export default function Nilot12EvoServerKeywordPage() {
  return <StaticKeywordPage slug="nilot-12-evo-server" />;
}
