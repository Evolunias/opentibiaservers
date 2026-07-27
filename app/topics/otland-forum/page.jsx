import OtlandForumKeywordPage, { generateMetadata } from './otland-forum';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OtlandForumKeywordPage />;
}
