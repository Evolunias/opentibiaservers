import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nilot-with-screenshots-server-argentina');
}

export default function NilotWithScreenshotsServerArgentinaKeywordPage() {
  return <StaticKeywordPage slug="nilot-with-screenshots-server-argentina" />;
}
