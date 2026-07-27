import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-coxaot');
}

export default function CurrentCoxaotKeywordPage() {
  return <StaticKeywordPage slug="current-coxaot" />;
}
