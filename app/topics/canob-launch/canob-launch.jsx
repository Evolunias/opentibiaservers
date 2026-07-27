import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('canob-launch');
}

export default function CanobLaunchKeywordPage() {
  return <StaticKeywordPage slug="canob-launch" />;
}
