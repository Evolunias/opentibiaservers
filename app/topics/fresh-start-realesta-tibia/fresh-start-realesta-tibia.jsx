import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-realesta-tibia');
}

export default function FreshStartRealestaTibiaKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-realesta-tibia" />;
}
