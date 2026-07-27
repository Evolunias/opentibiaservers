import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-aurera-global-official');
}

export default function ActiveAureraGlobalOfficialKeywordPage() {
  return <StaticKeywordPage slug="active-aurera-global-official" />;
}
