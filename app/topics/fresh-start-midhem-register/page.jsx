import FreshStartMidhemRegisterKeywordPage, { generateMetadata } from './fresh-start-midhem-register';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <FreshStartMidhemRegisterKeywordPage />;
}
