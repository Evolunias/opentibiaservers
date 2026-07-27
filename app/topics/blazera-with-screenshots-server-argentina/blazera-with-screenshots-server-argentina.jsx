import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('blazera-with-screenshots-server-argentina');
}

export default function BlazeraWithScreenshotsServerArgentinaKeywordPage() {
  return <StaticKeywordPage slug="blazera-with-screenshots-server-argentina" />;
}
