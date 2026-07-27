import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('medivia-fun-server');
}

export default function MediviaFunServerKeywordPage() {
  return <StaticKeywordPage slug="medivia-fun-server" />;
}
