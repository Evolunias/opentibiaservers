import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('shadowcores-launcher');
}

export default function ShadowcoresLauncherKeywordPage() {
  return <StaticKeywordPage slug="shadowcores-launcher" />;
}
