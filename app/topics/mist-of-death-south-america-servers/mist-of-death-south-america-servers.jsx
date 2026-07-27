import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('mist-of-death-south-america-servers');
}

export default function MistOfDeathSouthAmericaServersKeywordPage() {
  return <StaticKeywordPage slug="mist-of-death-south-america-servers" />;
}
