import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('sabrehaven-baiak-server-argentina');
}

export default function SabrehavenBaiakServerArgentinaKeywordPage() {
  return <StaticKeywordPage slug="sabrehaven-baiak-server-argentina" />;
}
