import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('midhem-uk-server');
}

export default function MidhemUkServerKeywordPage() {
  return <StaticKeywordPage slug="midhem-uk-server" />;
}
