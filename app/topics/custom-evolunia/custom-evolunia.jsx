import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-evolunia');
}

export default function CustomEvoluniaKeywordPage() {
  return <StaticKeywordPage slug="custom-evolunia" />;
}
