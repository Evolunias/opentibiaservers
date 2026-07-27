import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-blazera-register');
}

export default function CurrentBlazeraRegisterKeywordPage() {
  return <StaticKeywordPage slug="current-blazera-register" />;
}
