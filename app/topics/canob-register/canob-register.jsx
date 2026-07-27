import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('canob-register');
}

export default function CanobRegisterKeywordPage() {
  return <StaticKeywordPage slug="canob-register" />;
}
