import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('dura-online-south-america-servers');
}

export default function DuraOnlineSouthAmericaServersKeywordPage() {
  return <StaticKeywordPage slug="dura-online-south-america-servers" />;
}
