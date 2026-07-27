import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-aurera-global-register');
}

export default function ActiveAureraGlobalRegisterKeywordPage() {
  return <StaticKeywordPage slug="active-aurera-global-register" />;
}
