import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('sabrehaven-with-screenshots-server-north-america');
}

export default function SabrehavenWithScreenshotsServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="sabrehaven-with-screenshots-server-north-america" />;
}
