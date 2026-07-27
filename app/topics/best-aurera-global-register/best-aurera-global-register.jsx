import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-aurera-global-register');
}

export default function BestAureraGlobalRegisterKeywordPage() {
  return <StaticKeywordPage slug="best-aurera-global-register" />;
}
