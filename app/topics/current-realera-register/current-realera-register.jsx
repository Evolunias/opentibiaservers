import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-realera-register');
}

export default function CurrentRealeraRegisterKeywordPage() {
  return <StaticKeywordPage slug="current-realera-register" />;
}
