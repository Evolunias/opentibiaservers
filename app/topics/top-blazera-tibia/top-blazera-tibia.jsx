import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-blazera-tibia');
}

export default function TopBlazeraTibiaKeywordPage() {
  return <StaticKeywordPage slug="top-blazera-tibia" />;
}
