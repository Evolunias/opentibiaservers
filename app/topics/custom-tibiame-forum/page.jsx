import CustomTibiameForumKeywordPage, { generateMetadata } from './custom-tibiame-forum';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomTibiameForumKeywordPage />;
}
