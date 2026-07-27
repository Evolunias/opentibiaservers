import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-ameria-official');
}

export default function NoResetAmeriaOfficialKeywordPage() {
  return <StaticKeywordPage slug="no-reset-ameria-official" />;
}
