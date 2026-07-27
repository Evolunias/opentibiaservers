import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-alastera-client');
}

export default function OfficialAlasteraClientKeywordPage() {
  return <StaticKeywordPage slug="official-alastera-client" />;
}
