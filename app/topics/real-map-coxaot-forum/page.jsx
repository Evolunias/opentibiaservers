import RealMapCoxaotForumKeywordPage, { generateMetadata } from './real-map-coxaot-forum';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RealMapCoxaotForumKeywordPage />;
}
