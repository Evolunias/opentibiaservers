import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('alastera-screenshots');
}

export default function AlasteraScreenshotsKeywordPage() {
  return <StaticKeywordPage slug="alastera-screenshots" />;
}
