import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-nostalther-ot-server');
}

export default function NewNostaltherOtServerKeywordPage() {
  return <StaticKeywordPage slug="new-nostalther-ot-server" />;
}
