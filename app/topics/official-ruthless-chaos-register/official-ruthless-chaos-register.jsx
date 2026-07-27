import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-ruthless-chaos-register');
}

export default function OfficialRuthlessChaosRegisterKeywordPage() {
  return <StaticKeywordPage slug="official-ruthless-chaos-register" />;
}
