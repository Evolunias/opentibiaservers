import LowExpGuideBrazilKeywordPage, { generateMetadata } from './low-exp-guide-brazil';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <LowExpGuideBrazilKeywordPage />;
}
