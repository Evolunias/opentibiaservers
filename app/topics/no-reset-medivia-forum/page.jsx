import NoResetMediviaForumKeywordPage, { generateMetadata } from './no-reset-medivia-forum';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NoResetMediviaForumKeywordPage />;
}
