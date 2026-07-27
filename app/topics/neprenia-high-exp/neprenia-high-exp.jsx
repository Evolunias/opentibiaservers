import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('neprenia-high-exp');
}

export default function NepreniaHighExpKeywordPage() {
  return <StaticKeywordPage slug="neprenia-high-exp" />;
}
