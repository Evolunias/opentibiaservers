import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-canob-register');
}

export default function NewSeasonCanobRegisterKeywordPage() {
  return <StaticKeywordPage slug="new-season-canob-register" />;
}
