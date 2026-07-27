import NoResetTibiantisKeywordPage, { generateMetadata } from './no-reset-tibiantis';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NoResetTibiantisKeywordPage />;
}
