import ActiveTrashformersLoginKeywordPage, { generateMetadata } from './active-trashformers-login';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ActiveTrashformersLoginKeywordPage />;
}
