import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-ruthless-chaos');
}

export default function FreshStartRuthlessChaosKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-ruthless-chaos" />;
}
