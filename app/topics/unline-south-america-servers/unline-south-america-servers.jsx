import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('unline-south-america-servers');
}

export default function UnlineSouthAmericaServersKeywordPage() {
  return <StaticKeywordPage slug="unline-south-america-servers" />;
}
