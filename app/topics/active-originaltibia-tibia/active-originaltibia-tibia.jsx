import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-originaltibia-tibia');
}

export default function ActiveOriginaltibiaTibiaKeywordPage() {
  return <StaticKeywordPage slug="active-originaltibia-tibia" />;
}
