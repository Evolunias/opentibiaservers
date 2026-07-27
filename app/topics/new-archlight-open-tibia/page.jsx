import NewArchlightOpenTibiaKeywordPage, { generateMetadata } from './new-archlight-open-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewArchlightOpenTibiaKeywordPage />;
}
