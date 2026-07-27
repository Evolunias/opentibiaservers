import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nilot-screenshots');
}

export default function NilotScreenshotsKeywordPage() {
  return <StaticKeywordPage slug="nilot-screenshots" />;
}
