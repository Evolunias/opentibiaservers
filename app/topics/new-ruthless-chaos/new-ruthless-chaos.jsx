import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-ruthless-chaos');
}

export default function NewRuthlessChaosKeywordPage() {
  return <StaticKeywordPage slug="new-ruthless-chaos" />;
}
