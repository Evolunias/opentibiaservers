import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('luminera-screenshots');
}

export default function LumineraScreenshotsKeywordPage() {
  return <StaticKeywordPage slug="luminera-screenshots" />;
}
