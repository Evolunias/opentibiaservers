import CustomTibiascapeForumKeywordPage, { generateMetadata } from './custom-tibiascape-forum';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomTibiascapeForumKeywordPage />;
}
