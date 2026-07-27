import RealMapCarlinotForumKeywordPage, { generateMetadata } from './real-map-carlinot-forum';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RealMapCarlinotForumKeywordPage />;
}
