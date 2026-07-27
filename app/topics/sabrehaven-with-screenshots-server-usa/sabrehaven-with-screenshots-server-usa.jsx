import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('sabrehaven-with-screenshots-server-usa');
}

export default function SabrehavenWithScreenshotsServerUsaKeywordPage() {
  return <StaticKeywordPage slug="sabrehaven-with-screenshots-server-usa" />;
}
