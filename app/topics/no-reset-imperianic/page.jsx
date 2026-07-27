import NoResetImperianicKeywordPage, { generateMetadata } from './no-reset-imperianic';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NoResetImperianicKeywordPage />;
}
