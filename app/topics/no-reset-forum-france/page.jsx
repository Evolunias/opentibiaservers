import NoResetForumFranceKeywordPage, { generateMetadata } from './no-reset-forum-france';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NoResetForumFranceKeywordPage />;
}
