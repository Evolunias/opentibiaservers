import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-tibianus-register');
}

export default function CurrentTibianusRegisterKeywordPage() {
  return <StaticKeywordPage slug="current-tibianus-register" />;
}
