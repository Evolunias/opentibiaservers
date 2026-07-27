import PopularRuthlessChaosForumKeywordPage, { generateMetadata } from './popular-ruthless-chaos-forum';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PopularRuthlessChaosForumKeywordPage />;
}
