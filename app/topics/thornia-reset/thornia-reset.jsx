import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('thornia-reset');
}

export default function ThorniaResetKeywordPage() {
  return <StaticKeywordPage slug="thornia-reset" />;
}
