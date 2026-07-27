import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('blazera-screenshots');
}

export default function BlazeraScreenshotsKeywordPage() {
  return <StaticKeywordPage slug="blazera-screenshots" />;
}
