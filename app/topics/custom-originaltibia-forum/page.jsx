import CustomOriginaltibiaForumKeywordPage, { generateMetadata } from './custom-originaltibia-forum';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomOriginaltibiaForumKeywordPage />;
}
