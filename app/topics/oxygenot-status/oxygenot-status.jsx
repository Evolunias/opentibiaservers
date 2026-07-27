import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oxygenot-status');
}

export default function OxygenotStatusKeywordPage() {
  return <StaticKeywordPage slug="oxygenot-status" />;
}
