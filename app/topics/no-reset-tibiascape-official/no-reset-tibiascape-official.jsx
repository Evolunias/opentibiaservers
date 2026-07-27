import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-tibiascape-official');
}

export default function NoResetTibiascapeOfficialKeywordPage() {
  return <StaticKeywordPage slug="no-reset-tibiascape-official" />;
}
