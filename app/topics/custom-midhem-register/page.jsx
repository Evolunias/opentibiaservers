import CustomMidhemRegisterKeywordPage, { generateMetadata } from './custom-midhem-register';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomMidhemRegisterKeywordPage />;
}
