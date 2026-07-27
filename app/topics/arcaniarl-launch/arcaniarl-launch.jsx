import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('arcaniarl-launch');
}

export default function ArcaniarlLaunchKeywordPage() {
  return <StaticKeywordPage slug="arcaniarl-launch" />;
}
