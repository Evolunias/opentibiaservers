import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-shadowcores-official');
}

export default function NewShadowcoresOfficialKeywordPage() {
  return <StaticKeywordPage slug="new-shadowcores-official" />;
}
