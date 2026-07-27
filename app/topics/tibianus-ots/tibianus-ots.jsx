import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibianus-ots');
}

export default function TibianusOtsKeywordPage() {
  return <StaticKeywordPage slug="tibianus-ots" />;
}
