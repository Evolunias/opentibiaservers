import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-serenity-official');
}

export default function RealMapSerenityOfficialKeywordPage() {
  return <StaticKeywordPage slug="real-map-serenity-official" />;
}
