import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('morgana-world');
}

export default function MorganaWorldKeywordPage() {
  return <StaticKeywordPage slug="morgana-world" />;
}
