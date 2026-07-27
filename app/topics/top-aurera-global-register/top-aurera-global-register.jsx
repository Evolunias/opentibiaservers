import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-aurera-global-register');
}

export default function TopAureraGlobalRegisterKeywordPage() {
  return <StaticKeywordPage slug="top-aurera-global-register" />;
}
