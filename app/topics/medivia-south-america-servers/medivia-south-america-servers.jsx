import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('medivia-south-america-servers');
}

export default function MediviaSouthAmericaServersKeywordPage() {
  return <StaticKeywordPage slug="medivia-south-america-servers" />;
}
