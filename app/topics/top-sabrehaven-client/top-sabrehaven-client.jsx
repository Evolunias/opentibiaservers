import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-sabrehaven-client');
}

export default function TopSabrehavenClientKeywordPage() {
  return <StaticKeywordPage slug="top-sabrehaven-client" />;
}
