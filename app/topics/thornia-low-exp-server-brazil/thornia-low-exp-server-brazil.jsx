import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('thornia-low-exp-server-brazil');
}

export default function ThorniaLowExpServerBrazilKeywordPage() {
  return <StaticKeywordPage slug="thornia-low-exp-server-brazil" />;
}
