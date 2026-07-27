import NoResetNostaltherForumKeywordPage, { generateMetadata } from './no-reset-nostalther-forum';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NoResetNostaltherForumKeywordPage />;
}
