import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-shadowcores-register');
}

export default function FreshStartShadowcoresRegisterKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-shadowcores-register" />;
}
