import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-classick-drakoria');
}

export default function ActiveClassickDrakoriaKeywordPage() {
  return <StaticKeywordPage slug="active-classick-drakoria" />;
}
