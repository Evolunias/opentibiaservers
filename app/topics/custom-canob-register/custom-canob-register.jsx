import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-canob-register');
}

export default function CustomCanobRegisterKeywordPage() {
  return <StaticKeywordPage slug="custom-canob-register" />;
}
