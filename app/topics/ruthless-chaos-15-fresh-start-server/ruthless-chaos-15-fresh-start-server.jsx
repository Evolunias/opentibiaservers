import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ruthless-chaos-15-fresh-start-server');
}

export default function RuthlessChaos15FreshStartServerKeywordPage() {
  return <StaticKeywordPage slug="ruthless-chaos-15-fresh-start-server" />;
}
