import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('harmonia-ot-forum');
}

export default function HarmoniaOtForumKeywordPage() {
  return <StaticKeywordPage slug="harmonia-ot-forum" />;
}
