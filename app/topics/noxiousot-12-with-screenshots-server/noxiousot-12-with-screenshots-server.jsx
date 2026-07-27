import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('noxiousot-12-with-screenshots-server');
}

export default function Noxiousot12WithScreenshotsServerKeywordPage() {
  return <StaticKeywordPage slug="noxiousot-12-with-screenshots-server" />;
}
