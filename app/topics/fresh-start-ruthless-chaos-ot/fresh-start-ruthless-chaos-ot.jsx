import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-ruthless-chaos-ot');
}

export default function FreshStartRuthlessChaosOtKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-ruthless-chaos-ot" />;
}
