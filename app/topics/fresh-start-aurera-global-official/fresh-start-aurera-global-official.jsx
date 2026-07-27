import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-aurera-global-official');
}

export default function FreshStartAureraGlobalOfficialKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-aurera-global-official" />;
}
