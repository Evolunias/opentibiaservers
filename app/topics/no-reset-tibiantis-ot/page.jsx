import NoResetTibiantisOtKeywordPage, { generateMetadata } from './no-reset-tibiantis-ot';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NoResetTibiantisOtKeywordPage />;
}
