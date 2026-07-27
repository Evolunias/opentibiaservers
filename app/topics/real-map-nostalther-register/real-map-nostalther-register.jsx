import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-nostalther-register');
}

export default function RealMapNostaltherRegisterKeywordPage() {
  return <StaticKeywordPage slug="real-map-nostalther-register" />;
}
