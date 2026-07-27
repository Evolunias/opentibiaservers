import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ruthless-chaos-uk-server');
}

export default function RuthlessChaosUkServerKeywordPage() {
  return <StaticKeywordPage slug="ruthless-chaos-uk-server" />;
}
