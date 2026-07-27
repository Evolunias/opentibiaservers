import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-miracle-ot');
}

export default function NewMiracleOtKeywordPage() {
  return <StaticKeywordPage slug="new-miracle-ot" />;
}
