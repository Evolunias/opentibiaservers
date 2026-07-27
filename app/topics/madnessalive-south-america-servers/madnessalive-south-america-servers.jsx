import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('madnessalive-south-america-servers');
}

export default function MadnessaliveSouthAmericaServersKeywordPage() {
  return <StaticKeywordPage slug="madnessalive-south-america-servers" />;
}
