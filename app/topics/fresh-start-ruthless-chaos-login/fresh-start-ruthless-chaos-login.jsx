import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-ruthless-chaos-login');
}

export default function FreshStartRuthlessChaosLoginKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-ruthless-chaos-login" />;
}
