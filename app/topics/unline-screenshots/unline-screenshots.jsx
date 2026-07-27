import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('unline-screenshots');
}

export default function UnlineScreenshotsKeywordPage() {
  return <StaticKeywordPage slug="unline-screenshots" />;
}
