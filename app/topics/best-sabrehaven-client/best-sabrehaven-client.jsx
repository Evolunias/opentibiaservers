import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-sabrehaven-client');
}

export default function BestSabrehavenClientKeywordPage() {
  return <StaticKeywordPage slug="best-sabrehaven-client" />;
}
