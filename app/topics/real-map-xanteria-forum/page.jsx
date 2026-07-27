import RealMapXanteriaForumKeywordPage, { generateMetadata } from './real-map-xanteria-forum';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RealMapXanteriaForumKeywordPage />;
}
