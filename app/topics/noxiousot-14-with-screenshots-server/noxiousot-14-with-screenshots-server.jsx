import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('noxiousot-14-with-screenshots-server');
}

export default function Noxiousot14WithScreenshotsServerKeywordPage() {
  return <StaticKeywordPage slug="noxiousot-14-with-screenshots-server" />;
}
