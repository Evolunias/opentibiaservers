import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ot-servers-argentina');
}

export default function OtServersArgentinaKeywordPage() {
  return <StaticKeywordPage slug="ot-servers-argentina" />;
}
