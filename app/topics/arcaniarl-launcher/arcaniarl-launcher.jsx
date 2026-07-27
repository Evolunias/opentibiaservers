import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('arcaniarl-launcher');
}

export default function ArcaniarlLauncherKeywordPage() {
  return <StaticKeywordPage slug="arcaniarl-launcher" />;
}
