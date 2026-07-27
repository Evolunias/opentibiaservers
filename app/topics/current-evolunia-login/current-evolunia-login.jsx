import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-evolunia-login');
}

export default function CurrentEvoluniaLoginKeywordPage() {
  return <StaticKeywordPage slug="current-evolunia-login" />;
}
