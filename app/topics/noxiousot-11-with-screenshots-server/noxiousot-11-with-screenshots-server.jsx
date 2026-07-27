import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('noxiousot-11-with-screenshots-server');
}

export default function Noxiousot11WithScreenshotsServerKeywordPage() {
  return <StaticKeywordPage slug="noxiousot-11-with-screenshots-server" />;
}
