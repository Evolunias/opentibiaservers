import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nerana-world');
}

export default function NeranaWorldKeywordPage() {
  return <StaticKeywordPage slug="nerana-world" />;
}
