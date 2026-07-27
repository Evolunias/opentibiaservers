import NoResetServerPolandKeywordPage, { generateMetadata } from './no-reset-server-poland';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NoResetServerPolandKeywordPage />;
}
