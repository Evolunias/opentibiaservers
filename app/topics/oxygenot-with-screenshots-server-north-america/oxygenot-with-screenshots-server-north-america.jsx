import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oxygenot-with-screenshots-server-north-america');
}

export default function OxygenotWithScreenshotsServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="oxygenot-with-screenshots-server-north-america" />;
}
