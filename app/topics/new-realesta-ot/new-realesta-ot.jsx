import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-realesta-ot');
}

export default function NewRealestaOtKeywordPage() {
  return <StaticKeywordPage slug="new-realesta-ot" />;
}
