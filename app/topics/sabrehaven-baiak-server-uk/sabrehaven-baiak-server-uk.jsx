import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('sabrehaven-baiak-server-uk');
}

export default function SabrehavenBaiakServerUkKeywordPage() {
  return <StaticKeywordPage slug="sabrehaven-baiak-server-uk" />;
}
