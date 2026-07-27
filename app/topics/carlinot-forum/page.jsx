import CarlinotForumKeywordPage, { generateMetadata } from './carlinot-forum';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CarlinotForumKeywordPage />;
}
