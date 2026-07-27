import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-eldera-official');
}

export default function NewElderaOfficialKeywordPage() {
  return <StaticKeywordPage slug="new-eldera-official" />;
}
