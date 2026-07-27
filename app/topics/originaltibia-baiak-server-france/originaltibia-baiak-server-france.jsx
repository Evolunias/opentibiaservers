import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('originaltibia-baiak-server-france');
}

export default function OriginaltibiaBaiakServerFranceKeywordPage() {
  return <StaticKeywordPage slug="originaltibia-baiak-server-france" />;
}
