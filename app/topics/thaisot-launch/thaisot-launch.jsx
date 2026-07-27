import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('thaisot-launch');
}

export default function ThaisotLaunchKeywordPage() {
  return <StaticKeywordPage slug="thaisot-launch" />;
}
