import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-coxaot');
}

export default function RealMapCoxaotKeywordPage() {
  return <StaticKeywordPage slug="real-map-coxaot" />;
}
