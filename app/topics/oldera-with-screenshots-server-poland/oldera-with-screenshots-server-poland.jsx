import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oldera-with-screenshots-server-poland');
}

export default function OlderaWithScreenshotsServerPolandKeywordPage() {
  return <StaticKeywordPage slug="oldera-with-screenshots-server-poland" />;
}
