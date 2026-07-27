import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('shadowcores-bosses');
}

export default function ShadowcoresBossesKeywordPage() {
  return <StaticKeywordPage slug="shadowcores-bosses" />;
}
