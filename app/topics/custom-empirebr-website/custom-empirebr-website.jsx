import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-empirebr-website');
}

export default function CustomEmpirebrWebsiteKeywordPage() {
  return <StaticKeywordPage slug="custom-empirebr-website" />;
}
