import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ruthless-chaos-launcher');
}

export default function RuthlessChaosLauncherKeywordPage() {
  return <StaticKeywordPage slug="ruthless-chaos-launcher" />;
}
