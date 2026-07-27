import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-xanteria-official');
}

export default function NewXanteriaOfficialKeywordPage() {
  return <StaticKeywordPage slug="new-xanteria-official" />;
}
