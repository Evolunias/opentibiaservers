import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-blazera-register');
}

export default function LowrateBlazeraRegisterKeywordPage() {
  return <StaticKeywordPage slug="lowrate-blazera-register" />;
}
