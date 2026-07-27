import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-sabrehaven-ots');
}

export default function NewSabrehavenOtsKeywordPage() {
  return <StaticKeywordPage slug="new-sabrehaven-ots" />;
}
