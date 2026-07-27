import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-evolunia');
}

export default function ActiveEvoluniaKeywordPage() {
  return <StaticKeywordPage slug="active-evolunia" />;
}
