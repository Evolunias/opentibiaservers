import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('pacera-server');
}

export default function PaceraServerKeywordPage() {
  return <StaticKeywordPage slug="pacera-server" />;
}
