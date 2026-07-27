import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('medivia-status');
}

export default function MediviaStatusKeywordPage() {
  return <StaticKeywordPage slug="medivia-status" />;
}
