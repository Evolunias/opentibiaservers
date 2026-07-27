import NoResetTrashformersKeywordPage, { generateMetadata } from './no-reset-trashformers';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NoResetTrashformersKeywordPage />;
}
