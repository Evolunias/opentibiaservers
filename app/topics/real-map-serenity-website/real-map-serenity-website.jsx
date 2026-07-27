import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-serenity-website');
}

export default function RealMapSerenityWebsiteKeywordPage() {
  return <StaticKeywordPage slug="real-map-serenity-website" />;
}
