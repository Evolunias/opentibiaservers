import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('medivia-chile-server');
}

export default function MediviaChileServerKeywordPage() {
  return <StaticKeywordPage slug="medivia-chile-server" />;
}
