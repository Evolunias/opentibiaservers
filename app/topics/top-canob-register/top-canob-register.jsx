import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-canob-register');
}

export default function TopCanobRegisterKeywordPage() {
  return <StaticKeywordPage slug="top-canob-register" />;
}
