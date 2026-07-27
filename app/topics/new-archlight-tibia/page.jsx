import NewArchlightTibiaKeywordPage, { generateMetadata } from './new-archlight-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewArchlightTibiaKeywordPage />;
}
