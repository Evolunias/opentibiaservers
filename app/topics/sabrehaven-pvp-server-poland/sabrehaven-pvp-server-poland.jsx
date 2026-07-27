import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('sabrehaven-pvp-server-poland');
}

export default function SabrehavenPvpServerPolandKeywordPage() {
  return <StaticKeywordPage slug="sabrehaven-pvp-server-poland" />;
}
