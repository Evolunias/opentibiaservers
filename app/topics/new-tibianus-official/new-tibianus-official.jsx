import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-tibianus-official');
}

export default function NewTibianusOfficialKeywordPage() {
  return <StaticKeywordPage slug="new-tibianus-official" />;
}
