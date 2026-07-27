import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('samera-server');
}

export default function SameraServerKeywordPage() {
  return <StaticKeywordPage slug="samera-server" />;
}
