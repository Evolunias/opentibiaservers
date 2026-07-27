import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-aurera-global-official');
}

export default function CurrentAureraGlobalOfficialKeywordPage() {
  return <StaticKeywordPage slug="current-aurera-global-official" />;
}
