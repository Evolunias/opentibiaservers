import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-aurera-global-register');
}

export default function PopularAureraGlobalRegisterKeywordPage() {
  return <StaticKeywordPage slug="popular-aurera-global-register" />;
}
