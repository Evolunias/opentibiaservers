import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-empirebr-website');
}

export default function NewEmpirebrWebsiteKeywordPage() {
  return <StaticKeywordPage slug="new-empirebr-website" />;
}
