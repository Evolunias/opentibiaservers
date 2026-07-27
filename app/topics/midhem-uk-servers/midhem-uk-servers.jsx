import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('midhem-uk-servers');
}

export default function MidhemUkServersKeywordPage() {
  return <StaticKeywordPage slug="midhem-uk-servers" />;
}
