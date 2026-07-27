import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-sabrehaven-client');
}

export default function OfficialSabrehavenClientKeywordPage() {
  return <StaticKeywordPage slug="official-sabrehaven-client" />;
}
