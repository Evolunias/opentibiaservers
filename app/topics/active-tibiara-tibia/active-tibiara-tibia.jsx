import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-tibiara-tibia');
}

export default function ActiveTibiaraTibiaKeywordPage() {
  return <StaticKeywordPage slug="active-tibiara-tibia" />;
}
