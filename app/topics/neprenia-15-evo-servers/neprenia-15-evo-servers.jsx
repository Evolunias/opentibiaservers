import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('neprenia-15-evo-servers');
}

export default function Neprenia15EvoServersKeywordPage() {
  return <StaticKeywordPage slug="neprenia-15-evo-servers" />;
}
