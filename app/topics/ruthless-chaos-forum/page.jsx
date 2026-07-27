import RuthlessChaosForumKeywordPage, { generateMetadata } from './ruthless-chaos-forum';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RuthlessChaosForumKeywordPage />;
}
