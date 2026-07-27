import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-serenity-register');
}

export default function RealMapSerenityRegisterKeywordPage() {
  return <StaticKeywordPage slug="real-map-serenity-register" />;
}
