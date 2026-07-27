import NoResetMistOfDeathKeywordPage, { generateMetadata } from './no-reset-mist-of-death';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NoResetMistOfDeathKeywordPage />;
}
