import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-canob-register');
}

export default function FreshStartCanobRegisterKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-canob-register" />;
}
