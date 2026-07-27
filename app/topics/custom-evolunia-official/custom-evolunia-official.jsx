import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-evolunia-official');
}

export default function CustomEvoluniaOfficialKeywordPage() {
  return <StaticKeywordPage slug="custom-evolunia-official" />;
}
