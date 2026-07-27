import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-ruthless-chaos-official');
}

export default function FreshStartRuthlessChaosOfficialKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-ruthless-chaos-official" />;
}
