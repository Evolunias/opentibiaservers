import NoResetMistOfDeathClientKeywordPage, { generateMetadata } from './no-reset-mist-of-death-client';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NoResetMistOfDeathClientKeywordPage />;
}
