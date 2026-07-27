import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('medivia-fresh-start-server-argentina');
}

export default function MediviaFreshStartServerArgentinaKeywordPage() {
  return <StaticKeywordPage slug="medivia-fresh-start-server-argentina" />;
}
