import MidhemRegisterKeywordPage, { generateMetadata } from './midhem-register';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <MidhemRegisterKeywordPage />;
}
