import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-realesta-tibia');
}

export default function ActiveRealestaTibiaKeywordPage() {
  return <StaticKeywordPage slug="active-realesta-tibia" />;
}
