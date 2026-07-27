import NoResetLumineraForumKeywordPage, { generateMetadata } from './no-reset-luminera-forum';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NoResetLumineraForumKeywordPage />;
}
