import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-sabrehaven-client');
}

export default function NewSabrehavenClientKeywordPage() {
  return <StaticKeywordPage slug="new-sabrehaven-client" />;
}
