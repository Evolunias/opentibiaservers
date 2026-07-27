import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('carlinot-screenshots');
}

export default function CarlinotScreenshotsKeywordPage() {
  return <StaticKeywordPage slug="carlinot-screenshots" />;
}
