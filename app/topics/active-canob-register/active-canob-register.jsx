import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-canob-register');
}

export default function ActiveCanobRegisterKeywordPage() {
  return <StaticKeywordPage slug="active-canob-register" />;
}
