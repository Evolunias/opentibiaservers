import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-originaltibia-tibia');
}

export default function NewOriginaltibiaTibiaKeywordPage() {
  return <StaticKeywordPage slug="new-originaltibia-tibia" />;
}
