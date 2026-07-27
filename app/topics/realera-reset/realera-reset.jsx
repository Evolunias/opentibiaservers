import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realera-reset');
}

export default function RealeraResetKeywordPage() {
  return <StaticKeywordPage slug="realera-reset" />;
}
