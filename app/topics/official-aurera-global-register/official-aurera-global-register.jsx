import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-aurera-global-register');
}

export default function OfficialAureraGlobalRegisterKeywordPage() {
  return <StaticKeywordPage slug="official-aurera-global-register" />;
}
