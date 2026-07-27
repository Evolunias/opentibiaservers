import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-classick-drakoria');
}

export default function CustomClassickDrakoriaKeywordPage() {
  return <StaticKeywordPage slug="custom-classick-drakoria" />;
}
