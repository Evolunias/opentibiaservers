import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-classick-drakoria-login');
}

export default function NewClassickDrakoriaLoginKeywordPage() {
  return <StaticKeywordPage slug="new-classick-drakoria-login" />;
}
