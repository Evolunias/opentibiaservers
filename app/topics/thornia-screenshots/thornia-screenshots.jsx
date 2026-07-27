import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('thornia-screenshots');
}

export default function ThorniaScreenshotsKeywordPage() {
  return <StaticKeywordPage slug="thornia-screenshots" />;
}
