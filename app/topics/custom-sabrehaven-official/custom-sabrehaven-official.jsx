import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-sabrehaven-official');
}

export default function CustomSabrehavenOfficialKeywordPage() {
  return <StaticKeywordPage slug="custom-sabrehaven-official" />;
}
