import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('kyra-tibia');
}

export default function KyraTibiaKeywordPage() {
  return <StaticKeywordPage slug="kyra-tibia" />;
}
