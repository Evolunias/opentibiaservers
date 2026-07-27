import NoResetTrashformersServerKeywordPage, { generateMetadata } from './no-reset-trashformers-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NoResetTrashformersServerKeywordPage />;
}
