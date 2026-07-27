import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-aurera-global-register');
}

export default function FreshStartAureraGlobalRegisterKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-aurera-global-register" />;
}
