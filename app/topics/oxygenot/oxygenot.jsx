import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oxygenot');
}

export default function OxygenotKeywordPage() {
  return <StaticKeywordPage slug="oxygenot" />;
}
