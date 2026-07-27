import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-shadowcores-website');
}

export default function NoResetShadowcoresWebsiteKeywordPage() {
  return <StaticKeywordPage slug="no-reset-shadowcores-website" />;
}
