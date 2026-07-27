import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-shadowcores-official');
}

export default function CustomShadowcoresOfficialKeywordPage() {
  return <StaticKeywordPage slug="custom-shadowcores-official" />;
}
