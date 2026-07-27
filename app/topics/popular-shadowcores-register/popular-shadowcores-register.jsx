import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-shadowcores-register');
}

export default function PopularShadowcoresRegisterKeywordPage() {
  return <StaticKeywordPage slug="popular-shadowcores-register" />;
}
