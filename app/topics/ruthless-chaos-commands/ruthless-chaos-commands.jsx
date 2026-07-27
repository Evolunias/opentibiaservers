import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ruthless-chaos-commands');
}

export default function RuthlessChaosCommandsKeywordPage() {
  return <StaticKeywordPage slug="ruthless-chaos-commands" />;
}
