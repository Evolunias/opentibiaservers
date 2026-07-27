import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('shadowcores-launch');
}

export default function ShadowcoresLaunchKeywordPage() {
  return <StaticKeywordPage slug="shadowcores-launch" />;
}
