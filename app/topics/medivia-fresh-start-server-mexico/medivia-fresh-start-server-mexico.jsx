import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('medivia-fresh-start-server-mexico');
}

export default function MediviaFreshStartServerMexicoKeywordPage() {
  return <StaticKeywordPage slug="medivia-fresh-start-server-mexico" />;
}
