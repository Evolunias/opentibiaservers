import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibianus-status');
}

export default function TibianusStatusKeywordPage() {
  return <StaticKeywordPage slug="tibianus-status" />;
}
