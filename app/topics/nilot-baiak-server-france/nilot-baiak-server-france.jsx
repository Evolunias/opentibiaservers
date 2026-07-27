import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nilot-baiak-server-france');
}

export default function NilotBaiakServerFranceKeywordPage() {
  return <StaticKeywordPage slug="nilot-baiak-server-france" />;
}
