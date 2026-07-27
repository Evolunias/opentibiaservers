import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-demolidores-official');
}

export default function NewDemolidoresOfficialKeywordPage() {
  return <StaticKeywordPage slug="new-demolidores-official" />;
}
