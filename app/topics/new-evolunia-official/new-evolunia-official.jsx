import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-evolunia-official');
}

export default function NewEvoluniaOfficialKeywordPage() {
  return <StaticKeywordPage slug="new-evolunia-official" />;
}
