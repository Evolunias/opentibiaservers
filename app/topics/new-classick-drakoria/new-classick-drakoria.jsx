import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-classick-drakoria');
}

export default function NewClassickDrakoriaKeywordPage() {
  return <StaticKeywordPage slug="new-classick-drakoria" />;
}
