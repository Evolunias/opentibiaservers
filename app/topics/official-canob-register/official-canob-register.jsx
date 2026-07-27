import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-canob-register');
}

export default function OfficialCanobRegisterKeywordPage() {
  return <StaticKeywordPage slug="official-canob-register" />;
}
