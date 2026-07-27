import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('celesta');
}

export default function CelestaKeywordPage() {
  return <StaticKeywordPage slug="celesta" />;
}
