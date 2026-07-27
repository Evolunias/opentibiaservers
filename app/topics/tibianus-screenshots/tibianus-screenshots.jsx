import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibianus-screenshots');
}

export default function TibianusScreenshotsKeywordPage() {
  return <StaticKeywordPage slug="tibianus-screenshots" />;
}
