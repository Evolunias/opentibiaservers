import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('sabrehaven-baiak-server-france');
}

export default function SabrehavenBaiakServerFranceKeywordPage() {
  return <StaticKeywordPage slug="sabrehaven-baiak-server-france" />;
}
