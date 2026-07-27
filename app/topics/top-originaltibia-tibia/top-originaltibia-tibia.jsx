import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-originaltibia-tibia');
}

export default function TopOriginaltibiaTibiaKeywordPage() {
  return <StaticKeywordPage slug="top-originaltibia-tibia" />;
}
