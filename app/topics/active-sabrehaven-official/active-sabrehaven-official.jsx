import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-sabrehaven-official');
}

export default function ActiveSabrehavenOfficialKeywordPage() {
  return <StaticKeywordPage slug="active-sabrehaven-official" />;
}
