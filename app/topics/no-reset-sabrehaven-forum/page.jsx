import NoResetSabrehavenForumKeywordPage, { generateMetadata } from './no-reset-sabrehaven-forum';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NoResetSabrehavenForumKeywordPage />;
}
