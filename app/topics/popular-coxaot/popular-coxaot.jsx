import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-coxaot');
}

export default function PopularCoxaotKeywordPage() {
  return <StaticKeywordPage slug="popular-coxaot" />;
}
