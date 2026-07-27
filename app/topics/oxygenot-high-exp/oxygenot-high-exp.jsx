import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oxygenot-high-exp');
}

export default function OxygenotHighExpKeywordPage() {
  return <StaticKeywordPage slug="oxygenot-high-exp" />;
}
