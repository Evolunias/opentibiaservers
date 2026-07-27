import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('archlight');
}

export default function ArchlightKeywordPage() {
  return <StaticKeywordPage slug="archlight" />;
}
