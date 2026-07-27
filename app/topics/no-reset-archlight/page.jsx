import NoResetArchlightKeywordPage, { generateMetadata } from './no-reset-archlight';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NoResetArchlightKeywordPage />;
}
