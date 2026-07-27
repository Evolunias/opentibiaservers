import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-originaltibia-tibia');
}

export default function FreshStartOriginaltibiaTibiaKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-originaltibia-tibia" />;
}
