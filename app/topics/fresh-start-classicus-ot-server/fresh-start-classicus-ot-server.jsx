import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-classicus-ot-server');
}

export default function FreshStartClassicusOtServerKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-classicus-ot-server" />;
}
