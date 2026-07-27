import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('classicus-screenshots');
}

export default function ClassicusScreenshotsKeywordPage() {
  return <StaticKeywordPage slug="classicus-screenshots" />;
}
