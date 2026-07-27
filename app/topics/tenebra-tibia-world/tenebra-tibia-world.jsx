import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tenebra-tibia-world');
}

export default function TenebraTibiaWorldKeywordPage() {
  return <StaticKeywordPage slug="tenebra-tibia-world" />;
}
