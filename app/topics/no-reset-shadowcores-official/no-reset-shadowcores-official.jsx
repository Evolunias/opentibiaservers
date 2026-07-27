import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-shadowcores-official');
}

export default function NoResetShadowcoresOfficialKeywordPage() {
  return <StaticKeywordPage slug="no-reset-shadowcores-official" />;
}
