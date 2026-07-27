import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-originaltibia-tibia');
}

export default function CustomOriginaltibiaTibiaKeywordPage() {
  return <StaticKeywordPage slug="custom-originaltibia-tibia" />;
}
