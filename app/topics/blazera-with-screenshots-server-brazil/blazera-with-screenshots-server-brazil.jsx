import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('blazera-with-screenshots-server-brazil');
}

export default function BlazeraWithScreenshotsServerBrazilKeywordPage() {
  return <StaticKeywordPage slug="blazera-with-screenshots-server-brazil" />;
}
