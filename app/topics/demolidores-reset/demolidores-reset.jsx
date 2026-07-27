import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('demolidores-reset');
}

export default function DemolidoresResetKeywordPage() {
  return <StaticKeywordPage slug="demolidores-reset" />;
}
