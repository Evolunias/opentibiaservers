import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('cyntara-with-screenshots-server-france');
}

export default function CyntaraWithScreenshotsServerFranceKeywordPage() {
  return <StaticKeywordPage slug="cyntara-with-screenshots-server-france" />;
}
