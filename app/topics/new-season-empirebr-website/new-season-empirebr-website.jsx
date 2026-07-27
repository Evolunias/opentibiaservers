import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-empirebr-website');
}

export default function NewSeasonEmpirebrWebsiteKeywordPage() {
  return <StaticKeywordPage slug="new-season-empirebr-website" />;
}
