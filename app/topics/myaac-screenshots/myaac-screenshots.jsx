import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('myaac-screenshots');
}

export default function MyaacScreenshotsKeywordPage() {
  return <StaticKeywordPage slug="myaac-screenshots" />;
}
