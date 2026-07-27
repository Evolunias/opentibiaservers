import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('sabrehaven-baiak-server-poland');
}

export default function SabrehavenBaiakServerPolandKeywordPage() {
  return <StaticKeywordPage slug="sabrehaven-baiak-server-poland" />;
}
