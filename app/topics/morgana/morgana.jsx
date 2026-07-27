import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('morgana');
}

export default function MorganaKeywordPage() {
  return <StaticKeywordPage slug="morgana" />;
}
