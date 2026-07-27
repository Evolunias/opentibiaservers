import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('open-tibia-servers-2026');
}

export default function OpenTibiaServers2026KeywordPage() {
  return <StaticKeywordPage slug="open-tibia-servers-2026" />;
}
