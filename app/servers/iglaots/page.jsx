import CanonicalServerRoute, { buildCanonicalServerMetadata } from '@/app/components/CanonicalServerRoute';

import IglaotsWikiPage, { iglaotsPage } from '@/app/components/IglaotsWikiPage';
import { buildArticleMetadata } from '@/lib/page-metadata';

export const revalidate = 3600;

export function generateMetadata() {
  return buildArticleMetadata(iglaotsPage);
}

export default function Page() {
  return <IglaotsWikiPage />;
}
