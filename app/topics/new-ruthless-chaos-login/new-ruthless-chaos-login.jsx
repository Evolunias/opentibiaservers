import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-ruthless-chaos-login');
}

export default function NewRuthlessChaosLoginKeywordPage() {
  return <StaticKeywordPage slug="new-ruthless-chaos-login" />;
}
