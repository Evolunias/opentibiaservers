import CustomTibiaretroForumKeywordPage, { generateMetadata } from './custom-tibiaretro-forum';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomTibiaretroForumKeywordPage />;
}
