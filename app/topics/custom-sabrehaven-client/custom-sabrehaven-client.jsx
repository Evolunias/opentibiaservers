import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-sabrehaven-client');
}

export default function CustomSabrehavenClientKeywordPage() {
  return <StaticKeywordPage slug="custom-sabrehaven-client" />;
}
