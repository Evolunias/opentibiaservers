import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-realesta-tibia');
}

export default function TopRealestaTibiaKeywordPage() {
  return <StaticKeywordPage slug="top-realesta-tibia" />;
}
