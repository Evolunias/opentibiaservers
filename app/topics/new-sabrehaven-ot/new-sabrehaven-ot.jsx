import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-sabrehaven-ot');
}

export default function NewSabrehavenOtKeywordPage() {
  return <StaticKeywordPage slug="new-sabrehaven-ot" />;
}
