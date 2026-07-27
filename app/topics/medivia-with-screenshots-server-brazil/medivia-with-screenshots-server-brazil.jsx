import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('medivia-with-screenshots-server-brazil');
}

export default function MediviaWithScreenshotsServerBrazilKeywordPage() {
  return <StaticKeywordPage slug="medivia-with-screenshots-server-brazil" />;
}
