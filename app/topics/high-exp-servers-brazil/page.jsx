import HighExpServersBrazilKeywordPage, { generateMetadata } from './high-exp-servers-brazil';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <HighExpServersBrazilKeywordPage />;
}
