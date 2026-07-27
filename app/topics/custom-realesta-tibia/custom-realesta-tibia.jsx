import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-realesta-tibia');
}

export default function CustomRealestaTibiaKeywordPage() {
  return <StaticKeywordPage slug="custom-realesta-tibia" />;
}
