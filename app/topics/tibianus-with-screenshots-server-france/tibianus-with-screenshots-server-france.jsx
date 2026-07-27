import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibianus-with-screenshots-server-france');
}

export default function TibianusWithScreenshotsServerFranceKeywordPage() {
  return <StaticKeywordPage slug="tibianus-with-screenshots-server-france" />;
}
