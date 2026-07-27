import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-oldera-official');
}

export default function NoResetOlderaOfficialKeywordPage() {
  return <StaticKeywordPage slug="no-reset-oldera-official" />;
}
