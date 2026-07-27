import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nilot-official');
}

export default function NilotOfficialKeywordPage() {
  return <StaticKeywordPage slug="nilot-official" />;
}
