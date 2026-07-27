import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ruthless-chaos-uk-servers');
}

export default function RuthlessChaosUkServersKeywordPage() {
  return <StaticKeywordPage slug="ruthless-chaos-uk-servers" />;
}
