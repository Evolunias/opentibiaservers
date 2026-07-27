import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibijka-reset');
}

export default function TibijkaResetKeywordPage() {
  return <StaticKeywordPage slug="tibijka-reset" />;
}
