import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-evolunia-login');
}

export default function FreshStartEvoluniaLoginKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-evolunia-login" />;
}
