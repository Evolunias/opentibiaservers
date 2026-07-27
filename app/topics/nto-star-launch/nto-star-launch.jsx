import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nto-star-launch');
}

export default function NtoStarLaunchKeywordPage() {
  return <StaticKeywordPage slug="nto-star-launch" />;
}
