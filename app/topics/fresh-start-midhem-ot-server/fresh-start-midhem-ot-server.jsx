import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-midhem-ot-server');
}

export default function FreshStartMidhemOtServerKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-midhem-ot-server" />;
}
