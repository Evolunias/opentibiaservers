import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-canob-official');
}

export default function NoResetCanobOfficialKeywordPage() {
  return <StaticKeywordPage slug="no-reset-canob-official" />;
}
