import NoResetWikiBrazilKeywordPage, { generateMetadata } from './no-reset-wiki-brazil';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NoResetWikiBrazilKeywordPage />;
}
