import NoResetTibiameForumKeywordPage, { generateMetadata } from './no-reset-tibiame-forum';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NoResetTibiameForumKeywordPage />;
}
