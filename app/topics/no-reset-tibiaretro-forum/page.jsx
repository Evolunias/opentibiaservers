import NoResetTibiaretroForumKeywordPage, { generateMetadata } from './no-reset-tibiaretro-forum';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NoResetTibiaretroForumKeywordPage />;
}
