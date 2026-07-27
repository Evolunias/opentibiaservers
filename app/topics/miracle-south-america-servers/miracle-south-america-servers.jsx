import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('miracle-south-america-servers');
}

export default function MiracleSouthAmericaServersKeywordPage() {
  return <StaticKeywordPage slug="miracle-south-america-servers" />;
}
