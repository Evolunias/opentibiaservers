import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-tibianus-register');
}

export default function LowrateTibianusRegisterKeywordPage() {
  return <StaticKeywordPage slug="lowrate-tibianus-register" />;
}
