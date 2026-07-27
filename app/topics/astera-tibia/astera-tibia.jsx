import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('astera-tibia');
}

export default function AsteraTibiaKeywordPage() {
  return <StaticKeywordPage slug="astera-tibia" />;
}
