import CanonicalServerRoute, { buildCanonicalServerMetadata } from '@/app/components/CanonicalServerRoute';

import RexiaWikiPage, { rexiaPage } from '@/app/components/RexiaWikiPage';
import { buildArticleMetadata } from '@/lib/page-metadata';

export const revalidate = 3600;

export function generateMetadata() {
  return buildArticleMetadata(rexiaPage);
}

export default function Page() {
  return <RexiaWikiPage />;
}
