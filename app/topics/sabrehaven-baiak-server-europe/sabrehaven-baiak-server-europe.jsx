import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('sabrehaven-baiak-server-europe');
}

export default function SabrehavenBaiakServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="sabrehaven-baiak-server-europe" />;
}
