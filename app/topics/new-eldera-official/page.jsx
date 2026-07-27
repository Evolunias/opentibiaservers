import NewElderaOfficialKeywordPage, { generateMetadata } from './new-eldera-official';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewElderaOfficialKeywordPage />;
}
