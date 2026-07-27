import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ot-servers');
}

export default function OtServersKeywordPage() {
  return <StaticKeywordPage slug="ot-servers" />;
}
