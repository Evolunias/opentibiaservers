import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-realera-ot');
}

export default function NewRealeraOtKeywordPage() {
  return <StaticKeywordPage slug="new-realera-ot" />;
}
