import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-aurera-global-official');
}

export default function PopularAureraGlobalOfficialKeywordPage() {
  return <StaticKeywordPage slug="popular-aurera-global-official" />;
}
