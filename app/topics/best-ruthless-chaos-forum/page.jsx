import BestRuthlessChaosForumKeywordPage, { generateMetadata } from './best-ruthless-chaos-forum';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BestRuthlessChaosForumKeywordPage />;
}
