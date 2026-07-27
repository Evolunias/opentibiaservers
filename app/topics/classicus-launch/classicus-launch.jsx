import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('classicus-launch');
}

export default function ClassicusLaunchKeywordPage() {
  return <StaticKeywordPage slug="classicus-launch" />;
}
