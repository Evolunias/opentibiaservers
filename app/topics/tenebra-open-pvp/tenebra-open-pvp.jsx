import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tenebra-open-pvp');
}

export default function TenebraOpenPvpKeywordPage() {
  return <StaticKeywordPage slug="tenebra-open-pvp" />;
}
