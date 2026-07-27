import NoResetMistOfDeathServerKeywordPage, { generateMetadata } from './no-reset-mist-of-death-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NoResetMistOfDeathServerKeywordPage />;
}
