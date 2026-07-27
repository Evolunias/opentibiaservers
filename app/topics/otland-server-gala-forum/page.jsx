import OtlandServerGalaForumKeywordPage, { generateMetadata } from './otland-server-gala-forum';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OtlandServerGalaForumKeywordPage />;
}
