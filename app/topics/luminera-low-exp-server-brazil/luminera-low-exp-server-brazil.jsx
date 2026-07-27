import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('luminera-low-exp-server-brazil');
}

export default function LumineraLowExpServerBrazilKeywordPage() {
  return <StaticKeywordPage slug="luminera-low-exp-server-brazil" />;
}
