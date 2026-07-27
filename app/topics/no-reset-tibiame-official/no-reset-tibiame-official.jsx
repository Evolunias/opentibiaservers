import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-tibiame-official');
}

export default function NoResetTibiameOfficialKeywordPage() {
  return <StaticKeywordPage slug="no-reset-tibiame-official" />;
}
