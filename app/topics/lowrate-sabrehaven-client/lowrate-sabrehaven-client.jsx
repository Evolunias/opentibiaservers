import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-sabrehaven-client');
}

export default function LowrateSabrehavenClientKeywordPage() {
  return <StaticKeywordPage slug="lowrate-sabrehaven-client" />;
}
