import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('antica-tibia');
}

export default function AnticaTibiaKeywordPage() {
  return <StaticKeywordPage slug="antica-tibia" />;
}
