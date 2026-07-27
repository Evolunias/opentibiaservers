import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-aurera-global-official');
}

export default function BestAureraGlobalOfficialKeywordPage() {
  return <StaticKeywordPage slug="best-aurera-global-official" />;
}
