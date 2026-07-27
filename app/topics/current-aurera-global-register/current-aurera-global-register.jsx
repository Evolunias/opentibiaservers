import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-aurera-global-register');
}

export default function CurrentAureraGlobalRegisterKeywordPage() {
  return <StaticKeywordPage slug="current-aurera-global-register" />;
}
