import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('sabrehaven-with-screenshots-server-france');
}

export default function SabrehavenWithScreenshotsServerFranceKeywordPage() {
  return <StaticKeywordPage slug="sabrehaven-with-screenshots-server-france" />;
}
