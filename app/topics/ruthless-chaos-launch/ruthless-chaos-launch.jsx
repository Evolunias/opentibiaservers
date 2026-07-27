import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ruthless-chaos-launch');
}

export default function RuthlessChaosLaunchKeywordPage() {
  return <StaticKeywordPage slug="ruthless-chaos-launch" />;
}
