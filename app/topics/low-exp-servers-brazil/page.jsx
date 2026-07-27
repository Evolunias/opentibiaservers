import LowExpServersBrazilKeywordPage, { generateMetadata } from './low-exp-servers-brazil';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <LowExpServersBrazilKeywordPage />;
}
