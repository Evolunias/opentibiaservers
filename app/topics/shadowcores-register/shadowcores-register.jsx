import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('shadowcores-register');
}

export default function ShadowcoresRegisterKeywordPage() {
  return <StaticKeywordPage slug="shadowcores-register" />;
}
