import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-shadowcores-register');
}

export default function OfficialShadowcoresRegisterKeywordPage() {
  return <StaticKeywordPage slug="official-shadowcores-register" />;
}
