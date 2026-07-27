import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-aurera-global-register');
}

export default function NewAureraGlobalRegisterKeywordPage() {
  return <StaticKeywordPage slug="new-aurera-global-register" />;
}
