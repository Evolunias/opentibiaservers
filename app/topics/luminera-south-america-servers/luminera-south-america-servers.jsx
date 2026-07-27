import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('luminera-south-america-servers');
}

export default function LumineraSouthAmericaServersKeywordPage() {
  return <StaticKeywordPage slug="luminera-south-america-servers" />;
}
