import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-aurera-global-register');
}

export default function RealMapAureraGlobalRegisterKeywordPage() {
  return <StaticKeywordPage slug="real-map-aurera-global-register" />;
}
