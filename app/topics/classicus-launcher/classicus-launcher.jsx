import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('classicus-launcher');
}

export default function ClassicusLauncherKeywordPage() {
  return <StaticKeywordPage slug="classicus-launcher" />;
}
