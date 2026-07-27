import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-coxaot');
}

export default function FreshStartCoxaotKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-coxaot" />;
}
