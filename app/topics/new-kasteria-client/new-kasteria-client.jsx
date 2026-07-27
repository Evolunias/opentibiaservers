import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-kasteria-client');
}

export default function NewKasteriaClientKeywordPage() {
  return <StaticKeywordPage slug="new-kasteria-client" />;
}
