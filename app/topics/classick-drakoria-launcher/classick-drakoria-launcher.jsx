import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('classick-drakoria-launcher');
}

export default function ClassickDrakoriaLauncherKeywordPage() {
  return <StaticKeywordPage slug="classick-drakoria-launcher" />;
}
