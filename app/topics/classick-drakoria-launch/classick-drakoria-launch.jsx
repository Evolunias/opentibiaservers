import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('classick-drakoria-launch');
}

export default function ClassickDrakoriaLaunchKeywordPage() {
  return <StaticKeywordPage slug="classick-drakoria-launch" />;
}
