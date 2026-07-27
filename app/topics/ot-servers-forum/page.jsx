import OtServersForumKeywordPage, { generateMetadata } from './ot-servers-forum';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OtServersForumKeywordPage />;
}
