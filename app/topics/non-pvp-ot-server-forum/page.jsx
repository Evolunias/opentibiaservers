import NonPvpOtServerForumKeywordPage, { generateMetadata } from './non-pvp-ot-server-forum';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NonPvpOtServerForumKeywordPage />;
}
