import LowrateAmeriaForumKeywordPage, { generateMetadata } from './lowrate-ameria-forum';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <LowrateAmeriaForumKeywordPage />;
}
