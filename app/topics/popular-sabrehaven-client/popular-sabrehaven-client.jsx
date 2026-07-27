import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-sabrehaven-client');
}

export default function PopularSabrehavenClientKeywordPage() {
  return <StaticKeywordPage slug="popular-sabrehaven-client" />;
}
