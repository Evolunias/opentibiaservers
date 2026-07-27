import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-sabrehaven-client');
}

export default function ActiveSabrehavenClientKeywordPage() {
  return <StaticKeywordPage slug="active-sabrehaven-client" />;
}
