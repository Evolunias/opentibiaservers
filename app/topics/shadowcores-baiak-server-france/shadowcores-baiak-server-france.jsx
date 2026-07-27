import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('shadowcores-baiak-server-france');
}

export default function ShadowcoresBaiakServerFranceKeywordPage() {
  return <StaticKeywordPage slug="shadowcores-baiak-server-france" />;
}
