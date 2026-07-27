import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('aurera-global-register');
}

export default function AureraGlobalRegisterKeywordPage() {
  return <StaticKeywordPage slug="aurera-global-register" />;
}
