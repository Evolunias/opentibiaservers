import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-shadowcores-register');
}

export default function CurrentShadowcoresRegisterKeywordPage() {
  return <StaticKeywordPage slug="current-shadowcores-register" />;
}
