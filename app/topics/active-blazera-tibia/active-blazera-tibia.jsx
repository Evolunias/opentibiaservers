import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-blazera-tibia');
}

export default function ActiveBlazeraTibiaKeywordPage() {
  return <StaticKeywordPage slug="active-blazera-tibia" />;
}
