import NewElderaGuideKeywordPage, { generateMetadata } from './new-eldera-guide';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewElderaGuideKeywordPage />;
}
