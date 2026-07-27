import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nostalther-with-screenshots-server-usa');
}

export default function NostaltherWithScreenshotsServerUsaKeywordPage() {
  return <StaticKeywordPage slug="nostalther-with-screenshots-server-usa" />;
}
