import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realesta-ot');
}

export default function RealestaOtKeywordPage() {
  return <StaticKeywordPage slug="realesta-ot" />;
}
