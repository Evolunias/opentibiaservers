import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('shadowcores-official');
}

export default function ShadowcoresOfficialKeywordPage() {
  return <StaticKeywordPage slug="shadowcores-official" />;
}
