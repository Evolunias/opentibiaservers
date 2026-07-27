import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-midhem-register');
}

export default function RealMapMidhemRegisterKeywordPage() {
  return <StaticKeywordPage slug="real-map-midhem-register" />;
}
