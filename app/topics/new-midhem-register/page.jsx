import NewMidhemRegisterKeywordPage, { generateMetadata } from './new-midhem-register';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewMidhemRegisterKeywordPage />;
}
