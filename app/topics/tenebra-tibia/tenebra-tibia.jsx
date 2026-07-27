import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tenebra-tibia');
}

export default function TenebraTibiaKeywordPage() {
  return <StaticKeywordPage slug="tenebra-tibia" />;
}
