import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('blazera-status');
}

export default function BlazeraStatusKeywordPage() {
  return <StaticKeywordPage slug="blazera-status" />;
}
