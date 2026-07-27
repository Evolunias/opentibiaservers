import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('noxiousot-screenshots');
}

export default function NoxiousotScreenshotsKeywordPage() {
  return <StaticKeywordPage slug="noxiousot-screenshots" />;
}
