import RealMapMediviaForumKeywordPage, { generateMetadata } from './real-map-medivia-forum';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RealMapMediviaForumKeywordPage />;
}
