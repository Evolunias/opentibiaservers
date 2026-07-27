import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-coxaot');
}

export default function TopCoxaotKeywordPage() {
  return <StaticKeywordPage slug="top-coxaot" />;
}
