import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-aurera-global-official');
}

export default function CustomAureraGlobalOfficialKeywordPage() {
  return <StaticKeywordPage slug="custom-aurera-global-official" />;
}
