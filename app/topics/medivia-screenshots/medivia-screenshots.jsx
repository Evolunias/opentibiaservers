import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('medivia-screenshots');
}

export default function MediviaScreenshotsKeywordPage() {
  return <StaticKeywordPage slug="medivia-screenshots" />;
}
