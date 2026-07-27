import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nilot-12-evo-servers');
}

export default function Nilot12EvoServersKeywordPage() {
  return <StaticKeywordPage slug="nilot-12-evo-servers" />;
}
