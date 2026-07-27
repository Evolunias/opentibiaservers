import NoResetServersBrazilKeywordPage, { generateMetadata } from './no-reset-servers-brazil';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NoResetServersBrazilKeywordPage />;
}
