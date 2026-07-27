import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-sabrehaven');
}

export default function NewSabrehavenKeywordPage() {
  return <StaticKeywordPage slug="new-sabrehaven" />;
}
