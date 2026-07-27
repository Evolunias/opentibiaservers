import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-nostalther-ot-server');
}

export default function CurrentNostaltherOtServerKeywordPage() {
  return <StaticKeywordPage slug="current-nostalther-ot-server" />;
}
