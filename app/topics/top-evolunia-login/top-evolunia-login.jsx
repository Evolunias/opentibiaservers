import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-evolunia-login');
}

export default function TopEvoluniaLoginKeywordPage() {
  return <StaticKeywordPage slug="top-evolunia-login" />;
}
