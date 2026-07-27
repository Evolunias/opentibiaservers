import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('solera-tibia');
}

export default function SoleraTibiaKeywordPage() {
  return <StaticKeywordPage slug="solera-tibia" />;
}
