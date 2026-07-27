import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-aurera-global-ot');
}

export default function NewAureraGlobalOtKeywordPage() {
  return <StaticKeywordPage slug="new-aurera-global-ot" />;
}
