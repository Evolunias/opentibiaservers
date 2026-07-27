import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evo-client-poland');
}

export default function EvoClientPolandKeywordPage() {
  return <StaticKeywordPage slug="evo-client-poland" />;
}
