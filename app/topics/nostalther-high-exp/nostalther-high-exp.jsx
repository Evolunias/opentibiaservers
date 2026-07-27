import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nostalther-high-exp');
}

export default function NostaltherHighExpKeywordPage() {
  return <StaticKeywordPage slug="nostalther-high-exp" />;
}
