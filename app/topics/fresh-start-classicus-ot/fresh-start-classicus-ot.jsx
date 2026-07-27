import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-classicus-ot');
}

export default function FreshStartClassicusOtKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-classicus-ot" />;
}
