import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('high-exp-tibiantis-server');
}

export default function HighExpTibiantisServerKeywordPage() {
  return <StaticKeywordPage slug="high-exp-tibiantis-server" />;
}
