import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-realera-tibia');
}

export default function TopRealeraTibiaKeywordPage() {
  return <StaticKeywordPage slug="top-realera-tibia" />;
}
