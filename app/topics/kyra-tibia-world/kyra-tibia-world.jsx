import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('kyra-tibia-world');
}

export default function KyraTibiaWorldKeywordPage() {
  return <StaticKeywordPage slug="kyra-tibia-world" />;
}
