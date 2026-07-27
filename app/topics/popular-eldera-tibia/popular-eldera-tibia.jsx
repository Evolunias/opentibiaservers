import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-eldera-tibia');
}

export default function PopularElderaTibiaKeywordPage() {
  return <StaticKeywordPage slug="popular-eldera-tibia" />;
}
