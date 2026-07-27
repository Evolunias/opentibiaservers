import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('medivia-south-america-server');
}

export default function MediviaSouthAmericaServerKeywordPage() {
  return <StaticKeywordPage slug="medivia-south-america-server" />;
}
