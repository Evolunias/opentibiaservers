import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nilot-with-screenshots-server-brazil');
}

export default function NilotWithScreenshotsServerBrazilKeywordPage() {
  return <StaticKeywordPage slug="nilot-with-screenshots-server-brazil" />;
}
