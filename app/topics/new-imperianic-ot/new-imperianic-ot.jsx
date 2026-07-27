import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-imperianic-ot');
}

export default function NewImperianicOtKeywordPage() {
  return <StaticKeywordPage slug="new-imperianic-ot" />;
}
