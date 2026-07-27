import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('amera-tibia');
}

export default function AmeraTibiaKeywordPage() {
  return <StaticKeywordPage slug="amera-tibia" />;
}
