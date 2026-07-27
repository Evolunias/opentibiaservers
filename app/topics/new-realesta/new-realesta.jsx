import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-realesta');
}

export default function NewRealestaKeywordPage() {
  return <StaticKeywordPage slug="new-realesta" />;
}
