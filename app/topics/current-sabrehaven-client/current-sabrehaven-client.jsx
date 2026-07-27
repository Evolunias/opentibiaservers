import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-sabrehaven-client');
}

export default function CurrentSabrehavenClientKeywordPage() {
  return <StaticKeywordPage slug="current-sabrehaven-client" />;
}
