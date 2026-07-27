import LowrateThorniaForumKeywordPage, { generateMetadata } from './lowrate-thornia-forum';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <LowrateThorniaForumKeywordPage />;
}
