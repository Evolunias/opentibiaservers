import NoResetTibiantisClientKeywordPage, { generateMetadata } from './no-reset-tibiantis-client';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NoResetTibiantisClientKeywordPage />;
}
