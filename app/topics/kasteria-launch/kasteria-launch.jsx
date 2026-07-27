import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('kasteria-launch');
}

export default function KasteriaLaunchKeywordPage() {
  return <StaticKeywordPage slug="kasteria-launch" />;
}
