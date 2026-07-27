import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-evolunia-website');
}

export default function OfficialEvoluniaWebsiteKeywordPage() {
  return <StaticKeywordPage slug="official-evolunia-website" />;
}
