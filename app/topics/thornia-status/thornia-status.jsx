import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('thornia-status');
}

export default function ThorniaStatusKeywordPage() {
  return <StaticKeywordPage slug="thornia-status" />;
}
