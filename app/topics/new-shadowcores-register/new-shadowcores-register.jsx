import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-shadowcores-register');
}

export default function NewShadowcoresRegisterKeywordPage() {
  return <StaticKeywordPage slug="new-shadowcores-register" />;
}
