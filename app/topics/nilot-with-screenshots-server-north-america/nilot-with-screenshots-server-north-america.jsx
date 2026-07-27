import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nilot-with-screenshots-server-north-america');
}

export default function NilotWithScreenshotsServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="nilot-with-screenshots-server-north-america" />;
}
