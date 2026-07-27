import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-sabrehaven-official');
}

export default function FreshStartSabrehavenOfficialKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-sabrehaven-official" />;
}
