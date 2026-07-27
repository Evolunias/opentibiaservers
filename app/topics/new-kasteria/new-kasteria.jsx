import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-kasteria');
}

export default function NewKasteriaKeywordPage() {
  return <StaticKeywordPage slug="new-kasteria" />;
}
