import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-nostalther-ot-server');
}

export default function FreshStartNostaltherOtServerKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-nostalther-ot-server" />;
}
