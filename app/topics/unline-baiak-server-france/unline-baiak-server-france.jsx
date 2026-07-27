import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('unline-baiak-server-france');
}

export default function UnlineBaiakServerFranceKeywordPage() {
  return <StaticKeywordPage slug="unline-baiak-server-france" />;
}
