import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-sabrehaven-client');
}

export default function FreshStartSabrehavenClientKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-sabrehaven-client" />;
}
