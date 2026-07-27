import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-sabrehaven-official');
}

export default function NewSabrehavenOfficialKeywordPage() {
  return <StaticKeywordPage slug="new-sabrehaven-official" />;
}
