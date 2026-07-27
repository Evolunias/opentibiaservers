import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('luminera-with-screenshots-server-brazil');
}

export default function LumineraWithScreenshotsServerBrazilKeywordPage() {
  return <StaticKeywordPage slug="luminera-with-screenshots-server-brazil" />;
}
