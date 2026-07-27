import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nilot-with-screenshots-server-usa');
}

export default function NilotWithScreenshotsServerUsaKeywordPage() {
  return <StaticKeywordPage slug="nilot-with-screenshots-server-usa" />;
}
