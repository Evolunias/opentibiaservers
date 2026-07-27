import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-serenity-login');
}

export default function RealMapSerenityLoginKeywordPage() {
  return <StaticKeywordPage slug="real-map-serenity-login" />;
}
