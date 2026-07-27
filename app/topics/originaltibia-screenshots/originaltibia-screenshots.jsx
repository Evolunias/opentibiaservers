import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('originaltibia-screenshots');
}

export default function OriginaltibiaScreenshotsKeywordPage() {
  return <StaticKeywordPage slug="originaltibia-screenshots" />;
}
