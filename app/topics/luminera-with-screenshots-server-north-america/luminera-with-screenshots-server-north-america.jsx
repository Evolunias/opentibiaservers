import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('luminera-with-screenshots-server-north-america');
}

export default function LumineraWithScreenshotsServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="luminera-with-screenshots-server-north-america" />;
}
