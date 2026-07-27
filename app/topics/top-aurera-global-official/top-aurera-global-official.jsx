import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-aurera-global-official');
}

export default function TopAureraGlobalOfficialKeywordPage() {
  return <StaticKeywordPage slug="top-aurera-global-official" />;
}
