import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-aurera-global-register');
}

export default function CustomAureraGlobalRegisterKeywordPage() {
  return <StaticKeywordPage slug="custom-aurera-global-register" />;
}
