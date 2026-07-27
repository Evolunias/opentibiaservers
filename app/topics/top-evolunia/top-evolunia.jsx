import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-evolunia');
}

export default function TopEvoluniaKeywordPage() {
  return <StaticKeywordPage slug="top-evolunia" />;
}
