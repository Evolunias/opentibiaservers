import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('luminera-with-screenshots-server-argentina');
}

export default function LumineraWithScreenshotsServerArgentinaKeywordPage() {
  return <StaticKeywordPage slug="luminera-with-screenshots-server-argentina" />;
}
