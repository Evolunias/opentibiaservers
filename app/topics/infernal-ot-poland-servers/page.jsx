import InfernalOtPolandServersKeywordPage, { generateMetadata } from './infernal-ot-poland-servers';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <InfernalOtPolandServersKeywordPage />;
}
