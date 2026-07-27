import NoResetVenoreotForumKeywordPage, { generateMetadata } from './no-reset-venoreot-forum';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NoResetVenoreotForumKeywordPage />;
}
