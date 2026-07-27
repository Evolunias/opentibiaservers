import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('sabrehaven-bosses');
}

export default function SabrehavenBossesKeywordPage() {
  return <StaticKeywordPage slug="sabrehaven-bosses" />;
}
