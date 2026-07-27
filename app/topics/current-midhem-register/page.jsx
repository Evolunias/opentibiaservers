import CurrentMidhemRegisterKeywordPage, { generateMetadata } from './current-midhem-register';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CurrentMidhemRegisterKeywordPage />;
}
