import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-nostalther-ot-server');
}

export default function OfficialNostaltherOtServerKeywordPage() {
  return <StaticKeywordPage slug="official-nostalther-ot-server" />;
}
