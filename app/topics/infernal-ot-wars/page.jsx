import InfernalOtWarsKeywordPage, { generateMetadata } from './infernal-ot-wars';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <InfernalOtWarsKeywordPage />;
}
