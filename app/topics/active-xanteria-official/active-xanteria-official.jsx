import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-xanteria-official');
}

export default function ActiveXanteriaOfficialKeywordPage() {
  return <StaticKeywordPage slug="active-xanteria-official" />;
}
