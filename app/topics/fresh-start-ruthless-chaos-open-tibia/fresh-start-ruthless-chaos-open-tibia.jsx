import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-ruthless-chaos-open-tibia');
}

export default function FreshStartRuthlessChaosOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-ruthless-chaos-open-tibia" />;
}
