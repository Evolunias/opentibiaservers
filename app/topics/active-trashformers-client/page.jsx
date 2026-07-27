import ActiveTrashformersClientKeywordPage, { generateMetadata } from './active-trashformers-client';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ActiveTrashformersClientKeywordPage />;
}
