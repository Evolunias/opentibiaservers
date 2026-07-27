import LowrateMidhemRegisterKeywordPage, { generateMetadata } from './lowrate-midhem-register';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <LowrateMidhemRegisterKeywordPage />;
}
