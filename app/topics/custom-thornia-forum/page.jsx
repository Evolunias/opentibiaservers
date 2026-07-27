import CustomThorniaForumKeywordPage, { generateMetadata } from './custom-thornia-forum';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomThorniaForumKeywordPage />;
}
