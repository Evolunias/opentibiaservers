import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-classicus-ot');
}

export default function TopClassicusOtKeywordPage() {
  return <StaticKeywordPage slug="top-classicus-ot" />;
}
