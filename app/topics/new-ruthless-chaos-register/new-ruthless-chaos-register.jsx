import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-ruthless-chaos-register');
}

export default function NewRuthlessChaosRegisterKeywordPage() {
  return <StaticKeywordPage slug="new-ruthless-chaos-register" />;
}
