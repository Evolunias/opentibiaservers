import NoResetCarlinotForumKeywordPage, { generateMetadata } from './no-reset-carlinot-forum';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NoResetCarlinotForumKeywordPage />;
}
