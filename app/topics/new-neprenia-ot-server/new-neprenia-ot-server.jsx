import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-neprenia-ot-server');
}

export default function NewNepreniaOtServerKeywordPage() {
  return <StaticKeywordPage slug="new-neprenia-ot-server" />;
}
