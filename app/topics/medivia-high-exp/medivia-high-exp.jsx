import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('medivia-high-exp');
}

export default function MediviaHighExpKeywordPage() {
  return <StaticKeywordPage slug="medivia-high-exp" />;
}
